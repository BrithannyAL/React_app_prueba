import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1><a href="/buscador">El país de los libros</a></h1>
            <ul className="menu">
                <li><Link className="menu_link" to="#">Inicio</Link></li>
                <li><Link className="menu_link" to="#">Buscador</Link></li>
                <li><Link className="menu_link" to="#">Contacto</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;