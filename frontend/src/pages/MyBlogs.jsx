import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link, useLocation } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import axios from 'axios'
import { URL } from '../url'
import LoadingSpinner from '../components/LoadingSpinner'
import HomePost from '../components/HomePost'

const MyBlogs = () => {

  const {search} = useLocation() 
  const [posts, setPosts] = useState([])
  const [noResults, SetNoResults] = useState(false)
  const [loader, setLoader] = useState(false)
  const {user} = useContext(UserContext)
  // console.log(user)

  const fetchPosts = async (req, res) => {
    setLoader(true)
     try {
      const res = await axios.get(URL+"/api/posts/user/"+user._id)
      // console.log(res)
      setPosts(res.data)
      if(res.data.length === 0) {
        SetNoResults(true)
      }
      else {
        SetNoResults(false)
      }
      setLoader(false)
     } catch (err) {
       console.log(err)
       setLoader(true)
     }
  }

  useEffect(() => {
    fetchPosts()

  },[search])


  return (
    <div>
      <Navbar />
      <div className='px-8 md:px-[200px] min-h-[80vh]'>
      {loader?<LoadingSpinner/>:!noResults?posts.map((post)=>(

        <>
        <Link to={user?`/posts/post/${post._id}`:"/login"}>
        <HomePost key={post._id} post={post}/>
        </Link>
        </>

        )):<h3 className="text-center font-bold mt-16">no post avalaible</h3>}
      </div>
     
      <Footer />
    </div>
  )
}

export default MyBlogs
