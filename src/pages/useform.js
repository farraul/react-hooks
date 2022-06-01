import Header from "../components/adhoc/header";
import { UseFormHook } from "../components/generic/useformhook";

/* Este archivo importa en userform UseFormHook, donde está el handle */

const UseForm = () => {

    const [formValues, handleInputChange] = UseFormHook({
        name: '',
        email: '',
        password: '',
    });

    const { name, email, password } = formValues

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando",formValues)
    }

    return (
        <form onSubmit={ handleSubmit }> 
            <Header />
            <div className="use-form">

                <input
                    type="text"
                    name="name"
                    placeholder="Pepe"
                    value={name}
                    onChange={handleInputChange}
                    className="use-form__fields"
                />

                <input
                    type="text"
                    name="email"
                    placeholder="email@gmail.com"
                    value={email}
                    onChange={handleInputChange}
                    className="use-form__fields"
                />

                <input
                    type="text"
                    name="password"
                    placeholder="1234"
                    value={password}
                    onChange={handleInputChange}
                    className="use-form__fields"
                />

                <button type="submit" className="use-form__submit">Enviar a la consola</button>
            </div>
        </form>

    )
}

export default UseForm;