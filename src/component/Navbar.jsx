import React, {useState, useEffect} from "react";
import { NavLink,Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";


import "./navbar.css";

const Navbar = () => {
    const [scrolled, setscrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setscrolled(true);
        } else {
            setscrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })
    return (
        <header className={scrolled ? 'navbar scrolled' : 'navbar'}>
            <div>
                <img src="" alt="" />
            </div>
            <nav className="navigation">
                <ul>
                    <li><Link to="/mens">MEN</Link></li>
                    <li><Link to="/womens">WOMEN</Link></li>
                    <li><Link to="/kids">KIDS</Link></li>
                    <li><Link to="/sports">SPORTS</Link></li>
                    <li><Link to="/brands">BRANDS</Link></li>
                    <li><Link to="/collections">COLLECTIONS</Link></li>
                    <li><Link to="/outlet">OUTLET</Link></li>
                    <li><input type="text" placeholder="Search" /></li>
                    <NavLink to="/cart">
                        <ShoppingCartIcon/>
                    </NavLink>
                </ul>


            </nav>
        </header>
    )
}


export default Navbar;