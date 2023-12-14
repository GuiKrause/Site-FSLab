import { React, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HashLink as Link } from "react-router-hash-link";
import "./navbar.css";

const Navbar = () => {
    
    const [menu, setMenu] = useState('menu hide')
    const [menuHamburguer, setMenuHamburguer] = useState('bars hide')
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    
    const updateMenu = () => {
        if (isMenuClicked){
            setMenu('menu show')
            setMenuHamburguer('bars show')
        } else {
            setMenu('menu hide')
            setMenuHamburguer('bars hide')
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <nav className="navbar">
            <div className='nav-container menu'>
                <Link to='#projects' smooth>Projects</Link>
                <Link to='#about' smooth>About</Link>
                <Link to='#faq' smooth>FAQ</Link>
                <Link to='#team' smooth>Team</Link>
                <Link to='#contact' smooth>Contact</Link>
            </div>
            <FontAwesomeIcon icon='bars' className={menuHamburguer} onClick={updateMenu} />
            {/* <FontAwesomeIcon icon="xmark" className="xmark" /> */}
            <div className={menu} >
                <Link to='#projects' smooth>Projects</Link>
                <Link to='#about' smooth>About</Link>
                <Link to='#faq' smooth>FAQ</Link>
                <Link to='#team' smooth>Team</Link>
                <Link to='#contact' smooth>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar