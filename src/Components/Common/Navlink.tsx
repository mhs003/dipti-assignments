import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

export default function Navlink({
    to,
    children,
}: {
    to: string;
    children: ReactNode;
}) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                "p-4 border-b-2 w-full md:w-max " +
                (isActive && "text-red-800 border-b-red-800")
            }
        >
            {children}
        </NavLink>
    );
}
