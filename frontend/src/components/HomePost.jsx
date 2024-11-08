import {IF} from "../url"

const HomePost = ({ post }) => {
  return (
    <div className="w-full flex flex-col md:flex-row mt-8 space-y-4 md:space-x-4">
      {/* left */}
      <div className="w-full md:w-[35%] h-[200px] flex justify-center items-center">
        <img
          src={IF +post.photo}
          alt=""
          className="h-full w-full object-cover md:object-contain"
        />
      </div>
      {/* right */}
      <div className="flex flex-col w-full md:w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          {post.title}
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 space-x-4 items-center justify-between md:mb-4">
          <p>@{post.username}</p>
          <div className="flex space-x-2">
            <p>{post.updatedAt ? new Date(post.updatedAt).toLocaleDateString() : ""}</p>
            <p>{post.updatedAt ? new Date(post.updatedAt).toLocaleTimeString() : ""}</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">{post.desc}</p>
      </div>
    </div>
  );
};

export default HomePost;
