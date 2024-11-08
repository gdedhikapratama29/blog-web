import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { useContext, useState } from "react";
import Menu from "./Menu";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
    const [prompt, setPrompt] = useState("");
    const [menu, setMenu] = useState(false);
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const path = useLocation().pathname

    const showMenu = () => {
        setMenu(!menu);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        navigate(prompt ? `?search=${prompt}` : "/");
    };

    return (
        <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
            <h1 className="text-lg md:text-xl font-extrabold">
                <Link to="/">Blog</Link>
            </h1>
           {path === "/" &&<div className="flex justify-center items-center space-x-0">
                <form onSubmit={handleSearchSubmit}>
                    <button type="submit" className="cursor-pointer">
                        <BsSearch />
                    </button>
                    <input
                        onChange={(e) => setPrompt(e.target.value)}
                        className="outline-none px-3"
                        type="text"
                        placeholder="Search a post"
                        value={prompt}
                    />
                </form>
            </div>}
            <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4">
                {user ? (
                    <h3>
                        <Link to="/write">Write</Link>
                    </h3>
                ) : (
                    <h3>
                        <Link to="/login">Login</Link>
                    </h3>
                )}
                {user ? (
                    <div onClick={showMenu}>
                        <p className="cursor-pointer relative">
                            <FaBarsStaggered />
                        </p>
                        {menu && <Menu />}
                    </div>
                ) : (
                    <h3>
                        <Link to="/register">Register</Link>
                    </h3>
                )}
            </div>
            <div onClick={showMenu} className="md:hidden text-lg">
                <p className="cursor-pointer relative">
                    <FaBarsStaggered />
                </p>
                {menu && <Menu />}
            </div>
        </div>
    );
};

export default Navbar;
