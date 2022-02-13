import React, { useState, useEffect } from 'react';
import '../../styles/header.css';
import Logo from '../../static/Logo.png';
import { useSelector } from 'react-redux';

const Headerbar = () => {

    const lang = useSelector(state => state.lang.value);

    // Boolean state value to determine which color to use for the nav bar. When the navbar is at full size, we use text-white since background is redish. When navbar has to be toggler, we set it to text-secondary since background is white.
    const [textColor, setTextColor] = useState(window.innerWidth > 991);

    const updateColor = () => {
        setTextColor(window.innerWidth > 991);
    }

    // Object containing the english text and its french equivalent used in the header 
    const phrases = {
        about_en: "About",
        about_fr: "La Société",
        work_en: "Work",
        work_fr: "Nos Tâches",
        latest_en: "Latest",
        latest_fr: "Bulletin",
        peop_career_en: "People & Careers",
        peop_career_fr: "Gens & Carrières",
        contact_en: "Contact",
        contact_fr: "Contact",
    };

    useEffect(() => {
        window.addEventListener("resize", updateColor);
        return () => window.removeEventListener("resize", updateColor);
    })

    return(
        <nav className="navbar navbar-dark navbar-expand-lg bg-* fixed-top header-bar mt-4">
        <div className="container">
            <a className="navbar-brand" href="/">
                <img src={Logo} className="ms-5 logo" alt="proximity logo"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                    <img src={Logo} className="logo mt-3" alt="proximity logo"/>
                </h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                    <a className={`nav-link ${textColor ? "text-white" : "text-secondary"}`} aria-current="page" href="/">
                        {lang === "EN"
                        ? phrases.about_en
                        : phrases.about_fr}
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className={`nav-link ${textColor ? "text-white" : "text-secondary"}`} href="/">
                        {lang === "EN"
                        ? phrases.work_en
                        : phrases.work_fr}
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className={`nav-link ${textColor ? "text-white" : "text-secondary"}`} href="/"> 
                        {lang === "EN"
                        ? phrases.latest_en
                        : phrases.latest_fr}
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className={`nav-link ${textColor ? "text-white" : "text-secondary"}`} href="/">
                        {lang === "EN"
                        ? phrases.peop_career_en
                        : phrases.peop_career_fr}
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className={`nav-link ${textColor ? "text-white" : "text-secondary"}`} href="/">
                        {lang === "EN"
                        ? phrases.contact_en
                        : phrases.contact_fr}
                    </a>
                    </li>
                </ul>
            </div>
            </div>
        </div>
        </nav>
    )
}

export default Headerbar;