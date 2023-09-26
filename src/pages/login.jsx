export default function Login() {
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
                Password: <input name="password" />
            </label>
            <hr />
            <button type="reset">Reset form</button>
            <button type="submit">Submit form</button>
        </form>
    );
}
