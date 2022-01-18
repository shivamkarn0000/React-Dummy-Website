import React from 'react'
import "../css file/firstsection.css"
import { useState } from "react"
import { RiCloseFill } from "react-icons/ri"

function Firstsection() {
    const [menuClose, setMenuClose] = useState(false);
    const [secondmenuClose, setSecondmenuClose] = useState(false);
         
    return (
        <>
        <div className="firstsection-main-container">
            <div className={"firstsection-first-container " + (menuClose && "firstsection-hidden-menu")}>
                <a className="firstsection-first-container_a" href="/"> राष्ट्रिय पुरस्कार सम्बन्धि सूचना २०७८-</a>
                <RiCloseFill onClick={() => setMenuClose(true)} className="firstsection-button-icon" />
            </div>
        </div>
        <div className="firstsection-main-container">
            <div className={"firstsection-first-container " + (secondmenuClose && "firstsection-hidden-menu")}>
                <a className="firstsection-first-container_a" href="/"> महाकवि लक्ष्मी प्रसाद देवकोटा पुरस्कार सम्बन्धी सूचना</a>
                <RiCloseFill onClick={() => setSecondmenuClose(true)} className="firstsection-button-icon" />
            </div>
        </div>
        </>
    )
}

export default Firstsection;