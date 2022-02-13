import React from 'react';
import LangSetting from './elements/langSetting';
import { useSelector, useDispatch } from 'react-redux';
import { changeLang } from '../state/language';
import '../styles/header.css';

const Lang = () => {

    const lang = useSelector(state => state.lang.value);
    const dispatch = useDispatch();

    const en_weight = lang === "EN" ? 800 : 400;
    const fr_weight = lang === "FR" ? 800 : 400;

    function handleEN() {
        dispatch(changeLang('EN'));
    }

    function handleFR() {
        dispatch(changeLang('FR'));
    }

    return(
        <div className="lang">
            <LangSetting type="EN" handleClick={handleEN} weight={en_weight} />
            <LangSetting type="FR" handleClick={handleFR} weight={fr_weight} />
        </div>
    )
}

export default Lang;