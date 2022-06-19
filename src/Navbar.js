import './Navbar.css'
import { useState, useEffect } from 'react'

const Navbar = () => {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            }
            else handleShow(false)
        });
        // return () => {
        //     window.removeEventListener("scroll");
        // };
    }, []);


    return (
        <div className={`nav ${show && "nav__black"}`}>

            <img className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo" />

            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix Avatar" className="nav__avatar" />
        </div>
    )
}

export default Navbar