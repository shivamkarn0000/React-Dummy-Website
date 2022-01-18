import React from 'react'
import '../css file/sixthsection.css'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { HiOutlineDeviceMobile } from 'react-icons/hi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaSitemap } from 'react-icons/fa'
import { FaRegFileAudio } from 'react-icons/fa'


function SixthSection() {
    return (
        <>
            <div className="sixth-section-main-container">
                <div className="sixth-section-container">
                    <div className="sixth-section-sub-container">
                        <FaRegMoneyBillAlt className="sixth-section-icon" />
                        <a href="/">भुक्तानीका लागि प्राप्त विलहरुको सार्वजनिकरण</a>
                    </div>
                    <div className="sixth-section-sub-container sixth-section-sub-container-icon">
                        <HiOutlineDeviceMobile className="sixth-section-icon" />
                        <a href="/">आधिकारिक मनोनयन</a>
                    </div>
                    <div className="sixth-section-sub-container">
                        <BsFillTelephoneFill className="sixth-section-icon" />
                        <a href="/">टेलिफोन निर्देशिका</a>
                    </div>
                    <div className="sixth-section-sub-container sixth-section-sub-container-icon">
                        <FaSitemap className="sixth-section-icon" />
                        <a href="/">साइट सूची</a>
                    </div>
                    <div className="sixth-section-sub-container">
                        <FaRegFileAudio className="sixth-section-icon" />
                        <a href="/">अडियो ग्यालरी</a>
                    </div>
                    <div className="sixth-section-sub-container sixth-section-sub-container-icon">
                        <FaRegMoneyBillAlt className="sixth-section-icon" />
                        <a href="/">सम्पति अभिलेखीकरण सिस्टम-MOCTCA</a>
                    </div>
                </div>
                <div className="sixth-section-container1">
                    <div class="gmap">
                        <iframe title="map" src="https://maps.google.com/maps?q=M8WF+3XG,%20%E0%A4%95%E0%A4%BE%E0%A4%A0%E0%A4%AE%E0%A4%BE%E0%A4%A1%E0%A5%8C%E0%A4%81%2044600&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            style={{ border: '0', height: '100%', width: '100%' }}></iframe>
                    </div>
                </div>
                <div className="sixth-section-container2">
                    <div className="container2-events-underline-main">
                        <p>Events</p>
                        <div className="container2-events-underline"></div>
                    </div>
                    <div className="sixth-section-container2-events">
                        <div className="sixth-section-container2-main-box">
                            <div className="sixth-section-container2-date">
                                <p className="sixth-section-container2-date-p1">17</p>
                                <p className="sixth-section-container2-date-p2">Nov</p>
                            </div>
                            <div className="sixth-section-container2-box-content">
                                <p className="sixth-section-container2-box-content-p1">INTERACTION OF MONITORING </p>
                                <p className="sixth-section-container2-box-content-p2">SECTION</p>
                                <p className="sixth-section-container2-box-content-p3">MOCTCA</p>
                            </div>
                        </div>
                        <div className="sixth-section-container2-main-box sixth-section-container2-main-box2">
                            <div className="sixth-section-container2-date">
                                <p className="sixth-section-container2-date-p1 sixth-section-container2-date-p1-second">23</p>
                                <p className="sixth-section-container2-date-p2">May</p>
                            </div>
                            <div className="sixth-section-container2-box-content">
                                <p className="sixth-section-container2-box-content-p1">सार्क हस्तकला प्रदर्शनी समारोह, २०१९</p>
                                <p className="sixth-section-container2-box-content-p2">Lalitpur</p>
                            </div>
                        </div>
                        <div className="sixth-section-container2-main-box ">
                            <div className="sixth-section-container2-date">
                                <p className="sixth-section-container2-date-p1">17</p>
                                <p className="sixth-section-container2-date-p2">Nov</p>
                            </div>
                            <div className="sixth-section-container2-box-content">
                                <p className="sixth-section-container2-box-content-p1">Events-राष्ट्रिय तथा प्रादेशिक प्रतिभा पुरस्कार, महाकवि देवकोटा पुरस्कार, भगत सर्वजित मानव मर्यादा राष्ट्रिय पुरस्कार र गोपाल प्रसाद रिमाल राष्ट्रिय पुरस्कार समर्पण समारोह</p>
                                <p className="sixth-section-container2-box-content-p2">साँस्कृतिक संस्थान(राष्ट्रिय नाचघर), जमल,</p>
                                <p className="sixth-section-container2-box-content-p3" style={{color:"red", fontStyle: "italic"}}>(Closed)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SixthSection
