import React from 'react';
import Arrow from '../../static/Arrow.png';
import '../../styles/solvedProb.css';
import { useSelector } from 'react-redux';

const Return = (props) => {

    const lang = useSelector(state => state.lang.value);
    const phrases = props.phrases;

    return(
        <div className="return-top" onClick={() => window.scroll({top: 0, behaviour: 'smooth'})}>
            <span>
                <img className="up-arrow" src={Arrow} alt="up arrow"/>
                {lang === "EN" ? phrases.return_en : phrases.return_fr}
            </span>
        </div>
    );
}

export default Return;