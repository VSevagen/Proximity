import React, {useState, useEffect} from 'react';
import Headerbar from "./elements/headerBar";
import Lang from './lang';
import VideoPoster from '../static/video-poster.jpg';
import Arrow from '../static/Down_arrow.png';
import Video from '../static/video.mp4';
import { useSelector } from 'react-redux';
import '../styles/header.css';

const Header = () => {

    const lang = useSelector(state => state.lang.value);

    // Boolean State value to determine whether screen size is greater than 991px. If true, the video is displayed, else the video poster is displayed.
    const [isPC, setIsPC] = useState(window.innerWidth > 991);

    const updateWidth = () => {
        setIsPC(window.innerWidth > 991);
    }

    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    })

    // Object containing the english text and its french equivalent used in the header 
    const phrases = {
        tagline_en: "We make people more valuable to brands",
        tagline_fr: "Nous rendons les gens plus précieux pour les marques"
    }

    return(
        <div className="cont">
            <div>
                <Headerbar />
                <Lang />
                {isPC ? 
                <React.Fragment>
                    <video loop={true} className="video-poster" autoPlay={true} muted>
                        <source src={Video} type="video/mp4"/>
                    </video>
                </React.Fragment>
                :
                <React.Fragment>
                    <img className="video-poster" src={VideoPoster} alt="proximity poster"/>
                </React.Fragment>}
                <p className="tagline">
                    {lang === "EN"
                    ? phrases.tagline_en
                    : phrases.tagline_fr}
                </p>
                <img src={Arrow} className="arrow" alt="Down arrow"/>
            </div>
        </div>
    )
}

export default Header;