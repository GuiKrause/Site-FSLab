import { HashLink as Link } from "react-router-hash-link";
import "./navbar.css"
const Navbar = () => {
    return(
        <nav className="navbar">
            <Link to='#projects' smooth>Projects</Link>
            <Link to='#about' smooth>About</Link>
            <Link to='#faq' smooth>FAQ</Link>
            <Link to='#team' smooth>Team</Link>
            <Link to='#contact' smooth>Contact</Link>
        </nav>
    )
}

export default Navbar