import React from "react";
import { useState } from "react";

function SignUp () {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validar que las contraseñas coincidan
        if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
        }

        // Crear un objeto con los datos del usuario
        const userData = {
            firstName,
            lastName,
            email,
            password,
        };

        // Convertir el objeto en una cadena JSON
        const jsonData = JSON.stringify(userData);

        // Almacenar la cadena JSON en el Local Storage
        localStorage.setItem("userData", jsonData);

        // Redirigir a la página de Inicio de sesión
        window.location.href = "/SignIn";
    };

    return (
        <div className="signUp">
            <form className="form1" onSubmit={handleSubmit}>
                <p className="title">Register </p>
                <p className="message">Sign up now and get full access to our website. </p>
                <div className="flex">
                    <label>
                        <input required="" placeholder="First name" type="text" className="input" value={firstName} onChange={handleFirstNameChange}/>
                        <span>
                        </span>
                    </label>

                    <label>
                        <input required="" placeholder="Last name" type="text" className="input" value={lastName} onChange={handleLastNameChange}/>
                        <span>
                        </span>
                    </label>
                </div>

                <label>
                    <input required="" placeholder="Email" type="email" className="input" value={email} onChange={handleEmailChange}/>
                    <span>
                    </span>
                </label>

                <label>
                    <input required="" placeholder="Password" type="password" className="input" value={password} onChange={handlePasswordChange}/>
                    <span>
                    </span>
                </label>
                <label>
                    <input required="" placeholder="Confirm password" type="password" className="input" value={confirmPassword} onChange={handleConfirmPasswordChange}/>
                    <span>
                    </span>
                </label>
                <button type="submit" className="submit1">Sign Up</button>
                <p className="signin">
                    Already have an acount?&nbsp;&nbsp;
                    <a href="/SignIn">Sign in</a>
                </p>
            </form>
        </div>
    )
}

export default SignUp;
