import { AiFillStar } from "react-icons/ai";
import { BsDashLg } from "react-icons/bs";
import { ReviewType } from "../../Types";

export default function ReviewCard({ data }: { data: ReviewType }) {
    return (
        <div className="group border-2 hover:border-sky-500 rounded-md shadow-sm p-7 flex flex-col justify-center w-[90vw] md:w-[455px] items-center gap-5 transition-all hover:scale-105 hover:shadow-lg cursor-pointer">
            <img
                src={data.images}
                alt=""
                className="rounded-full border p-2 w-48 aspect-square"
            />
            <div className="flex flex-col justify-center items-center">
                <div className="flex gap-3">
                    {Array(data.point)
                        .fill(null)
                        .map((_, index) => {
                            return (
                                <AiFillStar
                                    className="group-hover:text-sky-600"
                                    size={20}
                                    key={index}
                                />
                            );
                        })}
                </div>
                <p className="text-slate-400 text-sm">{data.point} out of 5</p>
            </div>
            <p className="italic text-slate-600 text-center">
                "{data.message}"
            </p>
            <h3 className="flex gap-1 font-bold text-slate-700 group-hover:text-sky-600 text-xl md:text-2xl items-center justify-center italic">
                <BsDashLg />
                {data.name}
            </h3>
        </div>
    );
}
