import { IF } from "../url";

const ProfilePost = ({ post }) => {
  if (!post) return null;

  console.log(post);

  return (
    <div className="w-full flex mt-8 space-x-4">
      {/* Bagian Kiri */}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        {/* Cek jika ada `photo`, jika tidak ada tampilkan placeholder */}
        {post.photo ? (
          <img
            src={`${IF}${post.photo}`}
            alt="Post image"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-gray-300 flex items-center justify-center">
            <p className="text-gray-500">No Image</p>
          </div>
        )}
      </div>

      {/* Bagian Kanan */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          {post.title || "Untitled"} {/* Default jika title kosong */}
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 space-x-4 items-center justify-between md:mb-4">
          <p>@{post.username || "Unknown"}</p> {/* Default jika username kosong */}
          <div className="flex space-x-2">
            <p>
              {post.updatedAt
                ? new Date(post.updatedAt).toLocaleDateString()
                : ""}
            </p>
            <p>
              {post.updatedAt
                ? new Date(post.updatedAt).toLocaleTimeString()
                : ""}
            </p>
          </div>
        </div>
        <p className="text-sm md:text-lg">
          {post.desc || "No description available."} {/* Default jika desc kosong */}
        </p>
      </div>
    </div>
  );
};

export default ProfilePost;
