import { useEffect, useState } from "react";
import Navlink from "./Common/Navlink";
import { FaBars } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(false);
    }, [navigate]);

    return (
        <nav>
            <input
                id="bar-nav"
                type="checkbox"
                className="peer/toggleNav hidden"
                checked={checked}
                onClick={() =>
                    setChecked((chkd) => (chkd === true ? false : true))
                }
            />
            <label
                htmlFor="bar-nav"
                className="flex md:hidden m-5 w-10 h-10 peer-checked/toggleNav:bg-slate-200 rounded-lg justify-center items-center cursor-pointer"
            >
                <FaBars size={22} />
            </label>
            <div className="hidden peer-checked/toggleNav:flex md:flex flex-col md:flex-row px-5 md:px-0 gap-3 justify-center items-center">
                <Navlink to="/">Home</Navlink>
                <Navlink to="/reviews">Reviews</Navlink>
                <Navlink to="/dashboard">Dashboard</Navlink>
                <Navlink to="/blogs">Blogs</Navlink>
                <Navlink to="/about">About</Navlink>
                <Navlink to="/contact">Contact</Navlink>
            </div>
        </nav>
    );
}
