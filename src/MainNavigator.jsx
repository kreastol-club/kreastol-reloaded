import {useCookies} from "react-cookie";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import Login from "./pages/login";

export default function MainNavigator() {
    const [cookies, setCookie] = useCookies(["lang"]);
    let {t, i18n} = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(cookies["lang"]);
    }, [cookies, i18n]);

    return (
        <>
            <div className='navbar'>
                <Link to='/'>{t('home')}</Link> | <Link to='/game'>{t('games')}</Link>
            </div>
        </>

    );
}
