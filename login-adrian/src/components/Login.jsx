import React, { useState, useEffect } from 'react';
import Mensaje from './Mensaje';

const Login = () => {
const [usuario, setUsuario] = useState('');
const [contraseña, setContraseña] = useState('');
const [mensaje, setMensaje] = useState('');
const [usuarios, setUsuarios] = useState([]);

useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => setUsuarios(data))
},[]);
const handleUsuarioChange = (e) => setUsuario(e.target.value);

const handleContraseñaChange = (e) => setContraseña(e.target.value);

const handleSubmit = (e) => {
    e.preventDefault();

    const usuarioEncontrado = usuarios.find(
        (user) => user.email === usuario && user.username === contraseña
      );
    
    if (usuarioEncontrado) {
        setMensaje(`Bienvenido ${usuarioEncontrado.name}`);
    } else {
        setMensaje('Credenciales incorrectas');
    }
};
return (
<form onSubmit={handleSubmit}>
<label htmlFor="usuario">Usuario: </label>
<input type="text" id="usuario" value={usuario} onChange={handleUsuarioChange}/>

<label htmlFor="contraseña">Contraseña: </label>
<input type="text" id="contraseña" value ={contraseña} onChange={handleContraseñaChange}/>

<input type="submit" id="submit"  value="Iniciar Sesión"/>

<Mensaje mensaje={mensaje}></Mensaje>

</form>
);
};
export default Login;
