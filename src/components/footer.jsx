import React from 'react';
import Facebook from '../static/Facebook.png';
import Twitter from '../static/Twitter.png';
import LinkedIn from '../static/LinkedIn.png';
import { useSelector } from 'react-redux';
import '../styles/footer.css';

const Footer = () => {

    const lang = useSelector(state => state.lang.value);
    const phrases = {
        copyright_en: "© Proximity Worldwide 2018. All Rights Reserved.",
        copyright_fr: "© Proximity Worldwide 2018. Tous droits réservés.",
        privacy_en: "Privacy statement",
        privacy_fr: "Déclaration de confidentialité"
    }

    return(
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <p className="copyright">
                        {lang === "EN" ? phrases.copyright_en : phrases.copyright_fr}
                        <a href="/" className="privacy">{lang === "EN" ? phrases.privacy_en : phrases.privacy_fr}</a>.
                        </p>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="inner-b">
                            <img src={LinkedIn} className="social" alt="linkedin"/>
                            <img src={Twitter} className="social" alt="twitter"/>
                            <img src={Facebook} className="social" alt="facebook"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;