import React, { useEffect, useState } from 'react'
import './Header.css'

function Header() {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])





    return (
        <div className={`header ${show && "nav_black"}`}>
            <img
                className="header_logo"
                src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=26"
                alt="header_logo"
            />
            <img className="avatar-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="Avatar-logo" />

        </div>
    )
}

export default Header

