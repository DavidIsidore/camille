import React from 'react'
import logo from '../../assets/logo-escale.png'
import './header.scss'

export default function Header() {
    return (
        <div className="header">
            <img src={logo} alt="L'escale de Camille" className="header_logo" />
        </div>
    )
}
