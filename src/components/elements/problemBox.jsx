import React from 'react';
import { useSelector } from 'react-redux';
import '../../styles/solvedProb.css';

const ProblemBox = (props) => {

    const phrases = props.phrases;
    const lang = useSelector(state => state.lang.value);

    return(
        <div className="row mt-4">
            <div className="col-lg-6 col-sm-12 box">
                <div className="inner-box">
                    <div className="text-box">
                        <p>{lang === "EN" ? phrases.box_1_en : phrases.box_1_fr}</p>
                        <a href="/">{lang === "EN" ? phrases.find_out_en : phrases.find_out_fr}</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-sm-12 box">
                <div className="inner-box">
                    <div className="text-box">
                        <p>{lang === "EN" ? phrases.box_2_en : phrases.box_2_fr}</p>
                        <a href="/">{lang === "EN" ? phrases.find_out_en : phrases.find_out_fr}</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProblemBox;