import React from 'react'
import "../css file/thirdsection.css"
import {BsFillCircleFill} from 'react-icons/bs'
import {FaMobileAlt} from 'react-icons/fa'
import {FiInbox} from 'react-icons/fi'
import {BsSortNumericUp} from 'react-icons/bs'
import {FaBox} from 'react-icons/fa'
import {FaCogs} from 'react-icons/fa'
import {FaRegComments} from 'react-icons/fa'
export default function Thirdsection() {
    return (
        <div>
            <div className="e-portal">
                ई-पोर्टल
            </div>
            <div className="e-portal-main-main">
                <div className="e-portal-main">
                    <li className="e-portal-li e-portal-main-flexbox"><a href="/">पर्यटन उपज साझेदारी कार्यक्रम-सिस्टम</a></li>
                </div>
                <div className="e-portal-main">
                    <BsFillCircleFill  className="e-portal-icon"/>
                    <li className="e-portal-li"><a href="/">डिजिटल गुनासो प्रणाली</a></li>
                </div>
                <div className="e-portal-main">
                    <FaMobileAlt className="e-portal-icon"/>
                    <li className="e-portal-li"><a href="/">कार्यक्रमहरुको प्रगति</a></li>
                </div>
                <div className="e-portal-main">
                    <FiInbox className="e-portal-icon"/>
                    <li className="e-portal-li"><a href="/">ग्रुप मेसेज-मन्त्रालय</a></li>
                </div>
                <div className="e-portal-main">
                    <BsSortNumericUp className="e-portal-icon"/>
                    <li className="e-portal-li"><a href="/">नेपाल पर्यटन तथ्यांक</a></li>
                </div>
                <div className="e-portal-main">
                    <FaBox className="e-portal-icon"/>
                    <li className="e-portal-li"><a href="/">मन्त्रालय- नेक्स्ट क्लाउड</a></li>
                </div>
                <div className="e-portal-main">
                    <FaBox className="e-portal-icon"/>
                    <li className="e-portal-li"><a href="/">आजको प्रगति अपडेट</a></li>
                </div>
                <div className="e-portal-main">
                    <FaCogs className="e-portal-icon"/>
                <li className="e-portal-li"><a href="/">केन्द्रिकृत- तथ्यांक प्रणाली (Demo)</a></li>
                </div>
                <div className="e-portal-main e-portal-main1">
                    <FaRegComments className="e-portal-icon"/>
                    <li className="e-portal-li e-portal-main-flexbox"><a href="/">केन्द्रिकृत- तथ्यांक प्रणाली (Live)</a></li>
                </div>
            </div>
        </div>
    )
}
