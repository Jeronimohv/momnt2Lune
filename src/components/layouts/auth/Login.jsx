import { useState } from "react";
import { usuarios } from "../../database/database";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [getUsuario, setUsuario] = useState("");
  const [getContrasena, setContrasena] = useState("");
  const redireccion = useNavigate();

  function validarInicioSesion() {
    if (buscarUsuario()) {
      console.log("Inicio de sesión exitosa");
      redireccion("/home");
    } else {
      console.log("Error");
    }
  }
  function buscarUsuario() {
    return usuarios.some(
      (usuario) =>
        usuario.user === getUsuario && usuario.contrasena === getContrasena
    );
  }
  return (
    <form>
      <div className="containerAnimation">
        <h2>BIENVENIDO. INICIE SESIÓN</h2>
        <div className="input-group">
          <label htmlFor="username">Nombre de Usuario:</label>
          <input
            type="text"
            id="username"
            onChange={(e) => {
              setUsuario(e.target.value);
            }}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => {
              setContrasena(e.target.value);
            }}
          />
        </div>
        <section className="botones">
          <button onClick={validarInicioSesion} type="button" className="btn">
            Ingresar
          </button>
        </section>
      </div>
    </form>
  );
};
export default Login;