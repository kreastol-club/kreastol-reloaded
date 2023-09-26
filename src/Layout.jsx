import {useCookies} from "react-cookie";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";
import MainNavigator from "./MainNavigator";

export default function Layout(props) {
    const [cookies, setCookie] = useCookies(["lang"]);
    let {t, i18n} = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(cookies["lang"]);
    }, [cookies, i18n]);

    return (
        <div>
            <MainNavigator/>
            <hr/>
            <main>
                {props.children}
            </main>
        </div>
    );
}
