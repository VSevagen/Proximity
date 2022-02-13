import React from 'react';
import Pen from '../static/pen.png';
import '../styles/solvedProb.css';
import Return from './elements/return';
import ProblemBox from './elements/problemBox';
import { useSelector } from 'react-redux';

const SolvedProb = () => {

    const lang = useSelector(state => state.lang.value);
    const phrases = {
        start_text_en: "Business problem we've solved",
        start_text_fr: "Problème commercial que nous avons résolu",
        box_1_en: "Can a love story double as a hearing test?",
        box_1_fr: "Une histoire d'amour peut-elle servir de test auditif?",
        box_2_en: "How close to an FL player can you get?",
        box_2_fr: "À quelle distance d'un joueur FL pouvez-vous vous approcher?",
        find_out_en: "Find out here",
        find_out_fr: "Découvrez ici",
        view_en: "View our work",
        view_fr: "Voir notre travail",
        return_en: "Return to top",
        return_fr: "Retourner en haut",
    }

    return(
        <div className="container spacing">
            <div className="pen">
                <img src={Pen} alt="pen" />
            </div>
            <div className="start-text">
                <span>
                    {lang === "EN" ? phrases.start_text_en : phrases.start_text_fr}
                </span>
            </div>
            <ProblemBox phrases={phrases}/>
            <div className="view-work">
                <a href="/">{lang === "EN" ? phrases.view_en : phrases.view_fr}</a>
            </div>
            <Return phrases={phrases}/>
        </div>
    )
}

export default SolvedProb;