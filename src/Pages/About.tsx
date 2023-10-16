import heroImage from "../Images/rtr1604V.png";

export default function About() {
    return (
        <div>
            <div className="flex flex-col justify-center w-min items-center mt-12 mx-auto">
                <h1 className="text-4xl border-b-2 w-max">
                    <span className="text-red-700 italic">Apache</span> RTR 160{" "}
                    <span className="italic text-2xl">4v</span>
                </h1>
                <p className="italic ml-auto">Racing DNA Unleashed!</p>
            </div>
            <section className="flex flex-col-reverse md:flex-row my-16 mt-0 md:gap-10 justify-center items-center">
                <div className="w-full md:w-1/3 px-7 md:px-0 flex flex-col justify-center items-center md:items-end">
                    <h1 className="text-4xl border-b-2 w-max">
                        Become The Unstoppable
                    </h1>
                    <p className="italic w-max md:ml-auto">
                        The beast is here!
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
                </div>
                <img src={heroImage} alt="" />
            </section>
        </div>
    );
}
