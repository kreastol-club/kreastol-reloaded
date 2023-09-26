import {useTranslation} from "react-i18next";
import {useEffect} from "react";
import {useCookies} from "react-cookie";

export default function Login() {
    const [cookies, setCookie] = useCookies(["lang"]);
    let {t, i18n} = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(cookies["lang"]);
    }, [cookies, i18n]);

    async function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }

    return (
        <form method="post" onSubmit={handleSubmit}>
            <label>
                Email: <input name="email"/>
            </label>
            <label>
                {t('password')} <input name="password" />
            </label>
            <hr />
            <button type="reset">{t('reset-form')}</button>
            <button type="submit">{t('submit')}</button>
        </form>
    );
}
