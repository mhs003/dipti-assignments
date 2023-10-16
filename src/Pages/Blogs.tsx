import PostCard from "../Components/Common/PostCard";
import posts from "../Json/posts.json";

export default function Blogs() {
    return (
        <div className="flex flex-col justify-center items-center gap-10 mx-5 md:w-3/4 lg:w-2/3 md:mx-auto pt-16">
            {posts.map((post, index) => {
                return <PostCard key={index} post={post} />;
            })}
        </div>
    );
}
