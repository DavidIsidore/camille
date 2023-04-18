import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="nav">
            <ul className="nav_list">
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/about">À propos</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}
