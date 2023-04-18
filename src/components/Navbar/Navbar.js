import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import './navbar.scss'

export default function Navbar() {
    const location = useLocation()
    return (
        <nav className="nav">
            <ul className="nav_list">
                <li
                    className={
                        location.pathname === '/'
                            ? 'nav_list_item_active'
                            : 'nav_list_item'
                    }
                >
                    <Link to="/">Accueil</Link>
                </li>
                <li
                    className={
                        location.pathname === '/about'
                            ? 'nav_list_item_active'
                            : 'nav_list_item'
                    }
                >
                    <Link to="/about">À propos</Link>
                </li>
                <li
                    className={
                        location.pathname === '/contact'
                            ? 'nav_list_item_active'
                            : 'nav_list_item'
                    }
                >
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}
