import React, { useState } from 'react'
import '../css file/header.css'
import '../css file/menu.css'
import '../css file/marquee.css'
import { AiOutlineDownCircle, AiOutlineRight } from 'react-icons/ai'
import { CgToolbox } from 'react-icons/cg'
import { RiLockPasswordLine } from 'react-icons/ri'
import { IoIosTimer } from 'react-icons/io'
import { AiOutlineMail } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { ImLocation } from 'react-icons/im'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineDown } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import Marquee from 'react-double-marquee'
export const Header = () => {
    const [menu, setMenu] = useState(false);

    return (
        <>
            <div className="main-header">
                <div className="sub-header">
                    <div className="first-header">
                        <ul className="first-header-ul">
                            <li className="first-header-li first-header-li-puranosite" ><AiOutlineDownCircle className="first-header-li-icon" />
                                <a href="/">पुरानो साईट</a></li>

                            <li className="first-header-li"><CgToolbox className="first-header-li-icon" /><a href="/">दर्ता / चलानी</a></li>

                            <li className="first-header-li"><RiLockPasswordLine className="first-header-li-icon" /><a href="/">गेट पास</a></li>

                            <li className="first-header-li"><IoIosTimer className="first-header-li-icon" /><a href="/">इ - हाजिरी</a></li>

                            <li className="first-header-li"><AiOutlineMail className="first-header-li-icon" /><a href="/">कर्मचारी - एकीकृत इमेल</a></li>

                            <li className="first-header-li"><CgToolbox className="first-header-li-icon" /><a href="/">नेपाल पर्यटन प्रोफाईल</a></li>
                        </ul>
                    </div>
                    <div className="first-sub-header">
                        <div className="search-icon">

                            <BsSearch className="first-sub-header-icon" />
                        </div>
                        <ul className="first-sub-header-ul">
                            <li className="first-sub-header-li">
                                <a href='/'>English</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="main-container">
                    <div className="second-header-main">
                        <div className="second-header-sub">
                            <img className="second-header-img" src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Emblem_of_Nepal_%282020%29.svg/1222px-Emblem_of_Nepal_%282020%29.svg.png' alt="nepal-logo" />
                            <div className="second-header-content">
                                <ul className="second-header-ul">
                                    <li className="second-header-li second-header-li-neplasarkar">
                                        <a href='/'>नेपाल सरकार</a>
                                    </li>
                                    <li className="second-header-li second-header-li-saskriti">
                                        <a href='/'>संस्कृति, पर्यटन तथा नागरिक उड्डयन मन्त्रालय</a>
                                    </li>
                                    <li className="second-header-li second-header-li-sihadarbar">
                                        <a href='/'>सिंहदरवार, काठमाण्डौ</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="third-header-main">
                        <div className="third-header-sub">
                            <div className="third-header-email">
                                <li className="third-header-li"><AiOutlineMail className="third-header-li-icon" /><a href='/'>info@tourism.gov.np</a></li>
                            </div>
                            <div className="third-header-location">
                                <li className="third-header-li"><ImLocation className="third-header-li-icon" /><a href='/'>M8WF+3X Kathmandu</a></li>
                            </div>
                        </div>
                    </div>
                    <div className="fourth-header-main">
                        <div className="fourth-header-sub">
                            <div className="fourth-header-nepalimg">
                                <img className="fourth-header-nepalimg-sub" src="https://www.tourism.gov.np/web/img/nepal.jpg" alt="" />
                            </div>
                            <div className="fourth-header-para">
                                <p className="fourth-header-sub-para">व्यावसायिक र सृजनशील प्रशासन,विकास, समृद्धि र सुशासन</p>
                            </div>
                        </div>
                        <div className="fifth-header">
                            <div className="fifth-header-nepalflag">
                                <div className="fifth-header-nepalflag-img">
                                    <img className="fifth-header-nepalflag-sub-img" src="https://www.tourism.gov.np/web/img/nepal-flag.gif" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-menu"> <GiHamburgerMenu className="main-menu-hambergar" onClick={()=>setMenu(!menu)}/>
                <div className={"sub-main-menu " + (menu && "sub-menu-mobile")}>
                    <div className="main-menu-icon">
                        <AiOutlineHome className="main-menu-sub-icon" />
                    </div>
                    <div className="sub-second-menu ">
                        <ul className="main-menu-ul" >
                            <li className="main-menu-li main-menu-li2">हाम्रो बारेमा
                                <ul className="main-menu-sub-ul">
                                    <li className="main-menu-sub-li">मन्त्रालयको परिचय</li>
                                    <li className="main-menu-sub-li">मन्त्रालयको कार्यक्षेत्र</li>
                                    <div className="main-menu-sub-under-li">
                                        <li className="main-menu-sub-li">महाशाखाहरू
                                            <AiOutlineRight className="menu-sub-right-arrow" />
                                            <div className="main-menu-sub-li-under-li ">
                                                <li className="main-menu-sub-li-under-li-li">पर्यटन&nbsp;महाशाखा </li>
                                                <li className="main-menu-sub-li-under-li-li">प्रशासन&nbsp;तथा&nbsp;योजना&nbsp;महाशाखा </li>
                                                <li className="main-menu-sub-li-under-li-li">नागरिक&nbsp;उड्डयन&nbsp;महाशाखा</li>
                                                <li className="main-menu-sub-li-under-li-li">संस्कृति&nbsp;महाशाखा</li>
                                                <li className="main-menu-sub-li-under-li-li"> </li>
                                            </div>
                                        </li>
                                    </div>
                                    <li className="main-menu-sub-li">संगठनात्मक संरचना</li>
                                    <div className="main-menu-sub-under-li">
                                        <li className="main-menu-sub-li">कर्मचारी विवरण
                                            <AiOutlineRight className="menu-sub-right-arrow" />
                                            <div className="main-menu-sub-li-under-li">
                                                <li className="main-menu-sub-li-under-li-li">मन्त्रालय&nbsp;कर्मचारी&nbsp;बिबरण </li>
                                                <li className="main-menu-sub-li-under-li-li">अन्तर्गत&nbsp;निकाय&nbsp;सम्पर्क&nbsp;विवरण</li>
                                                <li className="main-menu-sub-li-under-li-li"> </li>
                                            </div>
                                        </li>
                                    </div>
                                </ul>
                            </li>
                        </ul>
                        <div className="menu-down-arrow">
                            <AiOutlineDown className="menu-sub-down-arrow" />
                        </div>
                    </div>
                    <div className="sub-second-menu">
                        <ul className="main-menu-ul">
                            <li className="main-menu-li">
                                प्रगति विवरण
                                <ul className="main-menu-sub-ul">
                                    <li className="main-menu-sub-li">कार्यक्रमहरुको प्रगति Live</li>
                                    <li className="main-menu-sub-li">आजको प्रगति अपडेट- निकायगत</li>
                                    <li className="main-menu-sub-li">बार्षिक प्रगति विवरण</li>
                                    <li className="main-menu-sub-li">प्रथम चौमासिक प्रगति विवरण</li>
                                </ul>
                            </li>
                        </ul>
                        <div className="menu-down-arrow">
                            <AiOutlineDown className="menu-sub-down-arrow" />
                        </div>
                    </div>
                    <div className="sub-second-menu">
                        <ul className="main-menu-ul">
                            <li className="main-menu-li">
                                संस्कृति
                                <ul className="main-menu-sub-ul">
                                    <li className="main-menu-sub-li">पुरातत्व विभाग</li>
                                    <li className="main-menu-sub-li">राष्ट्रिय अभिलेखालय</li>
                                    <li className="main-menu-sub-li">नेपाल प्रतिलिपि अधिकार रजिष्ट्रारको कार्यालय</li>
                                    <li className="main-menu-sub-li">भाषा आयोग</li>
                                    <div className="main-menu-sub-under-li">
                                        <li className="main-menu-sub-li">प्रतिष्ठान
                                            <AiOutlineRight className="menu-sub-right-arrow" />
                                            <div className="main-menu-sub-li-under-li main-menu-sub-li-under-li-second">
                                                <li className="main-menu-sub-li-under-li-li">नेपाल&nbsp;संगीत&nbsp;तथा&nbsp;नाट्य&nbsp;परज्ञा&nbsp;प्रतिष्ठान</li>
                                                <li className="main-menu-sub-li-under-li-li">प्नेपाल प्रज्ञा–प्रतिष्ठान</li>
                                                <li className="main-menu-sub-li-under-li-li">नेपाल ललितकला प्रज्ञा–प्रतिष्ठान</li>
                                            </div>
                                        </li>
                                    </div>
                                    <div className="main-menu-sub-under-li">
                                        <li className="main-menu-sub-li">संग्रहालय
                                            <AiOutlineRight className="menu-sub-right-arrow" />
                                            <div className="main-menu-sub-li-under-li main-menu-sub-li-under-li-second">
                                                <li className="main-menu-sub-li-under-li-li">हनुमानढोका&nbsp;दरवार&nbsp;संग्रहालय</li>
                                                <li className="main-menu-sub-li-under-li-li">प्राष्ट्रिय संग्राहलय छाउनी</li>
                                                <li className="main-menu-sub-li-under-li-li">पाटन संग्रहालय</li>
                                            </div>
                                        </li>
                                    </div>
                                    <li className="main-menu-sub-li">सांस्कृतिक संस्थान</li>
                                    <div className="main-menu-sub-under-li">
                                        <li className="main-menu-sub-li">बिकास कोष
                                            <AiOutlineRight className="menu-sub-right-arrow" />
                                            <div className="main-menu-sub-li-under-li main-menu-sub-li-under-li-second">
                                                <li className="main-menu-sub-li-under-li-li">पशुपति क्षेत्र विकास कोष</li>
                                                <li className="main-menu-sub-li-under-li-li">बृहत्तर&nbsp;जनकपुर&nbsp;क्षेत्र&nbsp;विकास&nbsp;परिषद</li>
                                                <li className="main-menu-sub-li-under-li-li">लुम्बिनी बिकास कोष</li>
                                            </div>
                                        </li>
                                    </div>
                                    <li className="main-menu-sub-li">विकास समितिहरु</li>
                                </ul>
                            </li>

                        </ul>
                        <div className="menu-down-arrow">
                            <AiOutlineDown className="menu-sub-down-arrow" />
                        </div>
                    </div>
                    <div className="main-menu-lis sub-second-menu">
                        <ul className="main-menu-ul">
                            <li className="main-menu-li">
                                नागरिक&nbsp;उड्डयन
                                <ul className="main-menu-sub-ul">
                                    <li className="main-menu-sub-li">नेपाल नागरिक उड्डयन प्राधिकरण</li>
                                    <li className="main-menu-sub-li">नेपाल वायु सेवा निगम</li>
                                    <li className="main-menu-sub-li">TIA Airport</li>
                                    <li className="main-menu-sub-li">अन्तर्राष्ट्रिय नागरिक उड्डयन संगठन</li>
                                    <li className="main-menu-sub-li">हवाई दुर्घटना सम्बन्धी विवरण</li>
                                </ul>
                            </li>
                        </ul>
                        <div className="menu-down-arrow">
                            <AiOutlineDown className="menu-sub-down-arrow" />
                        </div>
                    </div>
                    <div className="sub-second-menu">
                        <ul className="main-menu-ul">
                            <li className="main-menu-li">
                                ऐन/नियम
                                <ul className="main-menu-sub-ul">
                                    <li className="main-menu-sub-li">नियम तथा नियमावली</li>
                                    <li className="main-menu-sub-li">ऐन</li>
                                    <li className="main-menu-sub-li">प्रकाशनहरु</li>
                                    <li className="main-menu-sub-li">नीतिहरू</li>
                                    <li className="main-menu-sub-li">प्रतिवेदन</li>
                                    <li className="main-menu-sub-li">कार्यविधीहरु</li>
                                    <li className="main-menu-sub-li">हवाई दुर्घटना सम्बन्धी विवरण</li>
                                    <li className="main-menu-sub-li">अभिलेख</li>
                                    <li className="main-menu-sub-li">गठन आदेश</li>
                                </ul>
                            </li>
                        </ul>
                        <div className="menu-down-arrow">
                            <AiOutlineDown className="menu-sub-down-arrow" />
                        </div>
                    </div>
                    <div className="sub-second-menu">
                        <li className="main-menu-li">सूचना</li>
                    </div>
                    <div className="sub-second-menu">
                        <ul className="main-menu-ul">
                            <li className="main-menu-li">
                                समाचार/अन्य
                                <ul className="main-menu-sub-ul">
                                    <li className="main-menu-sub-li">गुरुयोजना</li>
                                    <li className="main-menu-sub-li">फोटो ग्यालरी</li>
                                    <li className="main-menu-sub-li">समाचार</li>
                                    <li className="main-menu-sub-li">कार्यक्रम</li>
                                    <li className="main-menu-sub-li">स्वतः सार्वजनिकीकरण</li>
                                </ul>
                            </li>
                        </ul>
                        <div className="menu-down-arrow">
                            <AiOutlineDown className="menu-sub-down-arrow" />
                        </div>
                    </div>
                    <div className="sub-second-menu">
                        <li className="main-menu-li">प्रेस विज्ञप्ति</li>
                    </div>
                    <div className="sub-second-menu">
                        <li className="main-menu-li">डाउनलोड</li>
                    </div>
                    <div className="sub-second-menu">
                        <li className="main-menu-li">सम्पर्क</li>
                    </div>
                </div>
            </div>

            <div className="animation-main-section">
                <div className="animation-sub-main-section">
                    <div
                        style={{
                            // width: '100vw',
                            // autoplayHoverPause: true,
                            whiteSpace: 'nowrap',
                            // animationplaystate: 'paused',
                        }}
                    >
                        <div className="animation-newupdate">
                            <div className="newupate">
                                <ul className="newupdate-ul">
                                    <li className="newupdate-li"><a href="/" >ताजा जानकारी</a></li>
                                </ul>
                            </div>
                            <Marquee className="marquee-scroll" behavior="scroll" direction="left" onmouseover="this.stop();" onmouseout="this.start();" delay="2000" speed="0.10">
                                <span className="marquee__content">
                                    <span className="animation-logo-content animation-margin">
                                        <img className="animation-logo" src="https://www.tourism.gov.np/web/img/new.gif" alt="" />
                                        <a target="_blank" href='/'>राष्ट्रिय पुरस्कार सम्बन्धि सूचना २०७८</a>
                                        <img className="pipe" src="../../img/pipe.jpg" alt="" />
                                    </span>
                                    <span className="animation-logo-content">
                                        <img className="animation-logo" src="https://www.tourism.gov.np/web/img/new.gif" alt="" />
                                        <a target="_blank" href='/'>महाकवि लक्ष्मी प्रसाद देवकोटा पुरस्कार सम्बन्धी सूचना</a>
                                        <img className="pipe" src="../../img/pipe.jpg" alt="" />

                                    </span>
                                    <span className="animation-logo-content">
                                        <a target="_blank" href='/'>साझेदारी अनुगमनको नमूना ।</a>
                                        <img className="pipe" src="../../img/pipe.jpg" alt="" />
                                    </span>
                                    <span className="animation-logo-content">
                                        <a target="_blank" href='/'>अमूर्त साँस्कृतिक सम्पदा दिवसको अवसरमा माननीय मन्त्रीज्यूको शुभकामना सन्देश ।</a>
                                        <img className="pipe" src="../../img/pipe.jpg" alt="" />
                                    </span>
                                    <span className="animation-logo-content">
                                        <a target="_blank" href='/'>छानविन समिति गठन गरिएको सम्बन्धी प्रेस विज्ञप्ति ।</a>
                                        <img className="pipe" src="../../img/pipe.jpg" alt="" />
                                    </span>
                                    <span className="animation-logo-content">
                                        <a target="_blank" href='/'>हवाई भाडा छानविन समितिद्वारा श्रीमान् सचिवज्यू समक्ष प्रतिवेदन प्रस्तुत ।</a>
                                        <img className="pipe" src="../../img/pipe.jpg" alt="" />
                                    </span>
                                    <span className="animation-logo-content">
                                        <a target="_blank" href='/'>नेपाल पर्यटन तथ्यांक, २०२० (Nepal Tourism Statistics, 2020) सार्वजनिक गरिएको सम्बन्धी प्रेस विज्ञप्ति ।</a>
                                        <img className="pipe" src="../../img/pipe.jpg" alt="" />
                                    </span>
                                    <span className="animation-logo-content">
                                        <a target="_blank" href='/'>श्रीमान् सचिवज्यू एवं विभागीय प्रमुखहरुबीच आ.व. २०७८।७९ कार्यसम्पादन करार सम्झौता सम्पन्न ।</a>
                                        <img className="pipe" src="../../img/pipe.jpg" alt="" />
                                    </span>
                                    <span className="animation-logo-content">
                                        <a target="_blank" href='/'>पुरातात्विक महत्वका मूर्तिहरु अमेरिकाबाट फिर्ता गरी नेपाल ल्याइएको सम्बन्धी प्रेस विज्ञप्ति ।</a>
                                        <img className="pipe" src="../../img/pipe.jpg" alt="" />
                                    </span>
                                    <span className="animation-logo-content">
                                        <a target="_blank" href='/'>नेपाल सरकार र बंगलादेश सरकारबीच पर्यटन क्षेत्रमा सहयोग आदान प्रदान गर्ने उद्श्यले बंगलादेश सरकारसंग MOU सम्म्पन ।</a>
                                        <img className="pipe" src="../../img/pipe.jpg" alt="" />
                                    </span>
                                    <span className="animation-logo-content">
                                        <a target="_blank" href='/'>श्रीमान सचिव यादव प्रसाद कोइरालाज्यूको विभिन्न समयमा भएको अनुगमन तथा निरीक्षणका तस्विरहरु</a>
                                        <img className="pipe" src="../../img/pipe.jpg" alt="" />
                                    </span>
                                    <span className="animation-logo-content">
                                        <a target="_blank" href='/'>Tourist Arrivals, 1st 6 months of 2016 to 2018</a>
                                        <img className="pipe" src="../../img/pipe.jpg" alt="" />
                                    </span>
                                    <span className="animation-logo-content">
                                        <a target="_blank" href='/'>२५६२ औं बुद्ध जयन्ति तथा अन्तराष्ट्रिय बौद्ध सम्मेलन तयारी/प्रगती सम्बन्धमा मन्त्रालयमा छलफल</a>
                                        <img className="pipe" src="../../img/pipe.jpg" alt="" />
                                    </span>
                                    <span className="animation-logo-content">
                                        <a target="_blank" href='/'>मा. संस्कृति, पर्यटन तथा नागरिक उड्डयन मन्त्री ज्यूबाट सम्पदाको पुन निर्माण कार्यको निरिक्षण</a>
                                        <img className="pipe" src="../../img/pipe.jpg" alt="" />
                                    </span>
                                </span>
                            </Marquee>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
