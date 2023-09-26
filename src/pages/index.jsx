import React from "react";
import {useTranslation} from "react-i18next";

const MainPage = () => {
    let {t, i18n} = useTranslation();
    let changeLanguageHandler = async (e) => {
        const languageValue = e.target.value
        await i18n.changeLanguage(languageValue);
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