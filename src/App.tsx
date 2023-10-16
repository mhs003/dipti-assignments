import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Reviews from "./Pages/Reviews";
import Blogs from "./Pages/Blogs";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Dashboard from "./Pages/Dashboard";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/dashboard" element={<Dashboard />} />

                <Route
                    path="*"
                    element={
                        <div className="h-[calc(100dvh-58px)] text-xl text-slate-800 flex justify-center items-center">
                            404 | Page Not Found
                        </div>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
