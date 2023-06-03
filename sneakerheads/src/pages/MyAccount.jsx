import React, { useState } from "react";

function MyAccount () {

    const handleSignOut = () => {
        // Limpiar la variable de sesión en el Local Storage
        localStorage.setItem("isLoggedIn", false);

        // Redirigir a la página de inicio de sesión
        window.location.href = "/SignIn";
    };

    // Obtener los datos del usuario almacenados en el Local Storage
    const jsonData = localStorage.getItem("userData");

    // Verificar si los datos existen en el Local Storage
    if (jsonData) {
        // Convertir la cadena JSON en un objeto
        const userData = JSON.parse(jsonData);

        return (
            <div>
                <h1 className="cuenta">My Account</h1>
                <h3>Welcome, {userData.firstName} {userData.lastName}!</h3>
                <p>Email: {userData.email}</p>
                <button className="close" onClick={handleSignOut}>Cerrar sesión</button>
            </div>
        )
    }
}

export default MyAccount;
