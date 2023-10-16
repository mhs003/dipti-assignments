import { PostType } from "../../Types";

export default function PostCard({ post }: { post: PostType }) {
    return (
        <div className="border p-5 rounded shadow">
            <h2 className="text-2xl">{post.title}</h2>
            <p className="mt-5">{post.body}</p>
        </div>
    );
}
