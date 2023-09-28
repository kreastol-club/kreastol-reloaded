import React, {useEffect} from "react";
import {useTranslation} from "react-i18next";
import {useCookies} from "react-cookie";
import Login from "./login";

const MainPage = () => {
    let {t, i18n} = useTranslation();
    const [cookies, setCookie] = useCookies(["lang"]);

    useEffect(() => {
        if(!cookies["lang"]){
            setCookie('lang', 'en');
        }
        i18n.changeLanguage(cookies["lang"]);
    }, [cookies, i18n, setCookie]);

    let changeLanguageHandler = (e) => {
        const languageValue = e.target.value;
        i18n.changeLanguage(languageValue);
        setCookie("lang", languageValue);
    }

    return (
        <div>
            <select className="custom-select" style={{width: 200}} onChange={changeLanguageHandler}>
                <option selected={cookies["lang"] === "en"} value="en">{t('english')}</option>
                <option selected={cookies["lang"] === "hu"} value="hu">{t('hungarian')}</option>
            </select>
            <br/>
            <br/>
            <h2>{t('welcome')}</h2>
            <small>{t('under-developement')}</small>

            <p>{t('check-back')}</p>
        </div>
    );
};

export default MainPage;