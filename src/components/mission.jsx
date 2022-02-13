import React, {useState, useEffect} from 'react';
import Carousel from './elements/carousel'
import { useSelector } from 'react-redux';
import '../styles/mission.css';

const Mission = () => {

    const lang = useSelector(state => state.lang.value);

    // Boolean state value to determine which portion of text to show.
    // On small screens, the mission text is too long and on small font-size will be unreadable. As such, part of the text is not shown depending on the screen size.
    const [isPC, setPC] = useState(window.innerWidth > 500);

    const updateViewport = () => {
        setPC(window.innerWidth > 500);
    }

    // Object containing the english text and its french equivalent used in the header
    const phrases = {
        top_text_en: "How we do it",
        top_text_fr: "Comment on le fait",
        end_text_en: "By harnessing powerful insights and smart targeting, we’re able to create behavior-changing ideas and experiences that deliver value to brands.",
        end_text_fr: "En exploitant des informations puissantes et un ciblage intelligent, nous sommes en mesure de créer des idées et des expériences qui changent les comportements et qui apportent de la valeur aux marques.",
    }

    useEffect(() => {
        window.addEventListener("resize", updateViewport);
        return () => window.removeEventListener("resize", updateViewport);
    })

    return(
        <div className="container spacing position-relative">
            <div className="top-text">
                <span>
                    {lang === "EN"
                    ? phrases.top_text_en
                    : phrases.top_text_fr}
                </span>
            </div>
            <div className="middle-text">
                {isPC && 
                    <span>
                    {lang === "EN"
                    ? 
                    <React.Fragment>
                        We use data driven creativity<br /> to solve business problems
                    </React.Fragment>
                    :
                    <React.Fragment>
                        Nous utilisons la créativité axée sur les données<br/> pour résoudre les problèmes commerciaux
                    </React.Fragment>}
                    </span>
                }
            </div>
            <Carousel />
            <div className="end-text">
                <span>
                    {lang === "EN"
                    ? phrases.end_text_en
                    : phrases.end_text_fr}
                </span>
                {isPC &&
                    <span> 
                    {lang === "EN"
                    ? 
                    <React.Fragment>
                        Supported by our proprietary,
                        <span className="underline"> Creative Intelligence process</span>, <span className="underline">unique tools</span> and <span className="underline">global partners</span>
                        , we are able to put data at the heart of everything we do to orchestrate experiences that deliver creativity with precision and purpose.
                    </React.Fragment>
                    :
                    <React.Fragment>
                        Pris en charge par notre propriétaire,
                        <span className="underline"> Processus d'intelligence créative</span>, <span className="underline">des outils uniques</span> and <span className="underline">partenaires mondiaux</span>
                        , nous sommes capables de placer les données au cœur de tout ce que nous faisons pour orchestrer des expériences qui délivrent de la créativité avec précision et sens.
                    </React.Fragment>}
                    </span>
                }
            </div>
        </div>
    )
}

export default Mission;