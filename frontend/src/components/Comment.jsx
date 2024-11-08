import axios from "axios"
import { BiEdit } from "react-icons/bi"
import { MdDelete } from "react-icons/md"
import { URL } from "../url"
const Comment = ({c}) => {
  const deleteComment = async () => {
    try {
      await axios.delete(URL+`"/api/comments/"+{c._id}`,{withCredentials: true})
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="px-4 py-3 bg-blue-100 rounded-lg my-2 shadow border">
    <div className="flex items-center justify-between">
        <h3 className="font-bold text-gray-600">@{c.author}</h3>
        <div className="flex justify-center items-center space-x-4">
        <p>{new Date(c.updatedAt).toString().slice(0, 15)}</p>
        <p>{new Date(c.updatedAt).toString().slice(16, 24)}</p>
        </div>
    </div>
    <p className="px-4 mt-2 mb-2">{c.comment}</p>

    </div>
  )
}

export default Comment
