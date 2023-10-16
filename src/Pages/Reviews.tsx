import ReviewCard from "../Components/Common/ReviewCard";
import reviews from "../Json/reviews.json";

export default function Reviews() {
    return (
        <section className="my-16 flex flex-col gap-16 justify-center items-center">
            <h2 className="px-6 text-4xl">What our customers says...</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {reviews.map((item, key) => {
                    return <ReviewCard data={item} key={key} />;
                })}
            </div>
        </section>
    );
}
