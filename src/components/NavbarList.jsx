
import React from 'react'
import '../css file/fourthsection.css'
export default function NavbarList({id, title, active, setSeclected }) {
    return (
        <li className={active ? "NavbarList active" : "NavbarList"}
        onClick={()=> setSeclected(id)}>
            {title}
        </li>
    )
}
