import React, {useEffect} from "react";
import {useTranslation} from "react-i18next";
import {useCookies} from "react-cookie";

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
                <option value="en">{t('english')}</option>
                <option value="hu">{t('hungarian')}</option>
            </select>
            <br/>
            <br/>
            <h3>{t('welcome')}</h3>
            <small>{t('under-developement')}</small>

            <p>{t('check-back')}</p>
        </div>
    );
};

export default MainPage;