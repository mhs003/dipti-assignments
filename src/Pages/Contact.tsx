import logo from "../Images/logo.png";
import { ContactType } from "../Types";

export default function Contact() {
    const contact_json: ContactType[] = [
        { title: "ADDRESS :", desc: "Post Box No. 4 Harita, Hosur - 635 109" },
        { title: "Toll Free :", desc: "18002587555" },
        { title: "Phone :", desc: "04344-276780" },
        { title: "Fax :", desc: "04344-276878" },
    ];
    return (
        <section className="my-16 flex flex-col gap-5 justify-center items-center">
            <h2 className="px-6 text-4xl">Contact Us</h2>
            <img src={logo} className="w-60" alt="" />
            {contact_json.map((c, i) => {
                return (
                    <div key={i} className="text-center">
                        <p className="font-bold">{c.title}</p>
                        <p>{c.desc}</p>
                    </div>
                );
            })}
        </section>
    );
}
