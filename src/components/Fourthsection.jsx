import "../css file/fourthsection.css"
import React, { useEffect, useState } from 'react'
import NavbarList from "./NavbarList";
import { FirstContainer, SecondContainer, ThirdContainer, FourthContainer, FifthContainer } from '../data.js'
import NavbarSecondSection from "./NavbarSecondSection";

function Fourthsection() {
    const [selected, setSelected] = useState("prakashan")
    const [data, setData] = useState([])
    const list = [
        {
            id: "prakashan",
            title: "प्रकाशनहरु"
        },

        {
            id: "niyam",
            title: "नियम तथा नियमावली"
        },

        {
            id: "ann",
            title: "ऐन"
        },

        {
            id: "niti",
            title: "नीतिहरू"
        },

        {
            id: "nirdesika",
            title: "निर्देशिकाहरु"
        },
    ];
    useEffect(() => {

        switch (selected) {
            case "prakashan":
                setData(FirstContainer);
                break;

            case "niyam":
                setData(SecondContainer);
                break;

            case "ann":
                setData(ThirdContainer);
                break;

            case "niti":
                setData(FourthContainer);
                break;

            case "nirdesika":
                setData(FifthContainer);
                break;
            
        }

    },[selected])
    return (
        <>
            <div className="fourthsection-main-container">
                <div className="navbar-main-container">
                    <div className="navbar-mediya-kendra-para">
                        मिडिया केन्द्र
                    </div>
                    <div className="navbar-container">
                        <ul className="navbar-container-ul navbar-container-li navbar-container-li-p">
                            {list.map((item) => (
                                <NavbarList title={item.title}
                                    active={selected === item.id}
                                    setSeclected={setSelected}
                                    id={item.id}
                                />
                            ))}
                            {/* <li className="navbar-container-li" id="prakashan"><p className="navbar-container-li-p">प्रकाशनहरु</p></li>
                            <li className="navbar-container-li" id="niyam"><p className="navbar-container-li-p">नियम तथा नियमावली</p></li>
                            <li className="navbar-container-li" id="ann"><p  className="navbar-container-li-p">ऐन</p></li>
                            <li className="navbar-container-li" id="niti"><p  className="navbar-container-li-p">नीतिहरू</p></li>
                            <li className="navbar-container-li" id="nirdesika"><p  className="navbar-container-li-p">निर्देशिकाहरु</p></li> */}
                        </ul>
                    </div>

                    <div className="navbar-sub-container">
                        <div className="navbar-main-content">
                            {data.map((d) => (
                                <div className="navbar-card">
                                    <img className="navbar-img" src={d.img} alt="" />
                                    <p className="navbar-p">{d.title}</p>
                                    <p className="navbar-p">{d.p}</p>
                                    <p className="navbar-p navbar-p-margin">{d.p1}</p>
                                    <a className="navbar-p-download" href="/">{d.download}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="navbar-second-section">
                    <p className="navbar-second-halkosuchana-samachar"> हालको सूचना | समाचार </p>
                    <NavbarSecondSection />
                </div>
            </div>

        </>
    )
}

export default Fourthsection
