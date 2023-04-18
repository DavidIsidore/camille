import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <Link>Accueil</Link>
            <Link>À propos</Link>
            <Link>Contact</Link>
        </nav>
    )
}
