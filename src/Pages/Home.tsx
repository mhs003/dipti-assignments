import { Link } from "react-router-dom";
import ReviewCard from "../Components/Common/ReviewCard";
import heroImage from "../Images/rtr1604V.png";
import reviews from "../Json/reviews.json";

export default function Home() {
    return (
        <div>
            {/* Main section */}
            <section className="flex flex-col-reverse md:flex-row my-16 mt-10 md:mt-5 md:gap-10 justify-center items-center">
                <div className="w-full md:w-1/3 px-7 md:px-0 flex flex-col justify-center items-center md:items-end">
                    <h1 className="text-4xl border-b-2 w-max">
                        <span className="text-red-700 italic">Apache</span> RTR
                        160 <span className="italic text-2xl">4v</span>
                    </h1>
                    <p className="italic w-max md:ml-auto">
                        Racing DNA Unleashed!
                    </p>
                    <p className="md:text-right py-5">
                        The TVS Apache RTR 160 4V has consistently pushed the
                        limits of performance and technology, always outdoing
                        itself in the race against time. With the
                        first-in-segment Ride Modes and SmartXonnect, the 2021
                        TVS Apache RTR 160 4V pushes the envelope like never
                        before. Race in any condition with nothing holding you
                        back. It’s time to become the Unstoppable.
                    </p>
                    <Link
                        to="/contact"
                        className="p-3 px-6 bg-red-500 hover:bg-red-800 text-white font-bold rounded-full transition-transform active:scale-90"
                    >
                        Contact Us
                    </Link>
                </div>
                <img src={heroImage} alt="" />
            </section>
            {/* Reviews section */}
            <section className="my-16 flex flex-col gap-16 justify-center items-center">
                <h2 className="px-6 text-4xl">Customers Reviews</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {reviews
                        .filter((item) => item.id <= 3)
                        .map((item, key) => {
                            return <ReviewCard data={item} key={key} />;
                        })}
                </div>
                <Link
                    to="/reviews"
                    className="py-4 px-8 border border-slate-800 text-slate-800 hover:text-white hover:bg-slate-800 rounded w-max"
                >
                    See all reviews
                </Link>
            </section>
        </div>
    );
}
