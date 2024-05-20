import { Link } from "react-router-dom";
import "./Lateral.css"

const Lateral = () => {
    return (
      <section className="laterall">
        
        <img className="imagen" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTQxMVrHr-5j7CeZ4cbcPP4X94pPXwNRhoNwamGWSW-w&s" alt="" />
        <a>
            <Link to="/home">Menú Home</Link>
        </a>
        <a>
            <Link to="/user">Usuario</Link>
        </a>
        <a>
            <Link to="/">Cerrar Sesión</Link>
        </a>


      </section>
    );
  };

  

export default Lateral