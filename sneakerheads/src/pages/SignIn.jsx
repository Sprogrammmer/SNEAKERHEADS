import React from "react";
import { useState } from "react";

function SignIn () {

    const handleSignIn = () => {
        // Establecer la variable de sesión en el Local Storage
        localStorage.setItem("isLoggedIn", true);
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Obtener los datos del usuario almacenados en el Local Storage
        const jsonData = localStorage.getItem("userData");

        // Verificar si los datos existen en el Local Storage
        if (jsonData) {
            // Convertir la cadena JSON en un objeto
            const userData = JSON.parse(jsonData);

            // Validar el inicio de sesión comparando los datos ingresados por el usuario
            if (email === userData.email && password === userData.password) {
                // Redirigir a la página de perfil
                window.location.href = "/MyAccount";
            } else {
                alert("Email y/o contraseña incorrectos");
            }
        }
    };

    return (
        <div className="signIn">
            <form className="form" onSubmit={handleSubmit}>
                <img src="/icon-solo.svg" className="form-icon" alt="" />
                <p className="form-title">Sign in to your account</p>
                <div className="input-container">
                    <input type="email" value={email} onChange={handleEmailChange} placeholder="Enter email" />
                    <span>
                    </span>
                </div>
                <div className="input-container">
                    <input type="password" value={password} onChange={handlePasswordChange} placeholder="Enter password" />
                </div>
                <button type="submit" className="submit" onClick={handleSignIn}>Sign In</button>
                <p className="signup-link">
                    No account?&nbsp;&nbsp;
                    <a href="/SignUp">Sign up</a>
                </p>
            </form>
        </div>
    )
}

export default SignIn;
