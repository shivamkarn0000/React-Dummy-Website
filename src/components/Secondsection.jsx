import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../css file/secondsection.css';
import '../css file/card.css'
import { AiOutlineDoubleLeft } from 'react-icons/ai'
import { AiOutlineDoubleRight } from 'react-icons/ai'

export class Secondsection extends Component {
    render() {
        return (
            <>
                <div className="second-section-first-container">
                    <div className="second-section-container-main">
                        <p className="second-section-container-p"><a href="/" alt="">थप हेर्नुहोस्</a></p>
                        <div className="second-section-container-first-slider">
                            <div class='container-fluid-first'>
                                <AiOutlineDoubleLeft className="second-section-left-arrow" onClick={() => this.refs.owl.prev()} />
                                <OwlCarousel ref="owl" items={1} margin={15} autoplay={true}>
                                    <div ><img className="img" alt="" src={'https://www.tourism.gov.np//images/gallery_images/1192.JPG'} /></div>
                                    <div><img className="img" alt="" src={'https://www.tourism.gov.np//images/gallery_images/1193.JPG'} /></div>
                                    <div ><img className="img" alt="" src={'https://www.tourism.gov.np//images/gallery_images/1189.JPG'} /></div>
                                    <div><img className="img" alt="" src={'https://www.tourism.gov.np//images/gallery_images/1190.JPG'} /></div>
                                    <div ><img className="img" alt="" src={'https://www.tourism.gov.np//images/gallery_images/1191.JPG'} /></div>
                                    <div><img className="img" alt="" src={'https://www.tourism.gov.np//images/gallery_feature_images/189.JPG'} /></div>
                                </OwlCarousel>
                                <AiOutlineDoubleRight className="second-section-right-arrow" onClick={() => this.refs.owl.next()} />
                            </div>
                        </div>
                        <div className="second-section-container-second-p-div">
                            <p className="second-section-container-second-p">माननीय मन्त्रीज्यूसँग European Union का प्रतिनिधि मण्डलको शिष्टाचार भेट सहितको छलफल कार्यक्रमका तस्वीरहरु(२०७८-०८-०७)</p>
                        </div>
                        <div class='container-fluid-second' >
                            <OwlCarousel items={3} margin={15} autoplay={true} >
                                <div ><img className="img" alt="" src={'https://www.tourism.gov.np//images/gallery_feature_images/190.JPG'} /></div>
                                <div><img className="img" alt="" src={'https://www.tourism.gov.np//images/gallery_feature_images/189.JPG'} /></div>
                                <div ><img className="img" alt="" src={'https://www.tourism.gov.np//images/gallery_feature_images/190.JPG'} /></div>
                                <div><img className="img" alt="" src={'https://www.tourism.gov.np//images/gallery_feature_images/189.JPG'} /></div>
                                <div ><img className="img" alt="" src={'https://www.tourism.gov.np//images/gallery_feature_images/190.JPG'} /></div>
                                <div><img className="img" alt="" src={'https://www.tourism.gov.np//images/gallery_feature_images/189.JPG'} /></div>
                            </OwlCarousel>
                        </div>
                    </div>
                    <div className="second-section-container-main-second">
                        <div className="second-section-main-card-items">
                            <div className="first-card-container">
                                <div className="first-card">
                                    <img className="first-card-img" src="https://www.tourism.gov.np//images/right_photo_images/23.jpg" alt="" />
                                </div>
                                <div className="first-card-second">
                                    <div className="first-card-fist-p-main">
                                        <div className="first-card-fist-p">
                                            श्री प्रेम बहादुर आले
                                        </div>
                                        <div className="first-card-second-p">
                                            माननीय संस्कृति, पर्यटन तथा ना.उ.मन्त्री
                                        </div>
                                    </div>
                                    <div className="first-card-img-main">
                                        <div className="first-card-facebook-img">
                                            <img className="first-card-facebook-img-main" src="https://www.tourism.gov.np/web/img/tw.svg" alt="" />
                                        </div>
                                        <div className="first-card-twitter-img">
                                            <img className="first-card-twiiter-img-main" src="https://www.tourism.gov.np/web/img/fb.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="first-card-container">
                                <div className="first-card">
                                    <img className="first-card-img" src="https://www.tourism.gov.np//images/right_photo_images/3.jpg" alt="" />
                                </div>
                                <div className="first-card-second">
                                    <div className="first-card-fist-p-main">
                                        <div className="first-card-fist-p">
                                            श्री यादव प्रसाद कोइराला
                                        </div>
                                        <div className="first-card-second-p">
                                            सचिव
                                        </div>
                                    </div>
                                    <div className="first-card-img-main">
                                        <div className="first-card-facebook-img">
                                            <img className="first-card-facebook-img-main" src="https://www.tourism.gov.np/web/img/tw.svg" alt="" />
                                        </div>
                                        <div className="first-card-twitter-img">
                                            <img className="first-card-twiiter-img-main" src="https://www.tourism.gov.np/web/img/fb.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="first-card-container">
                                <div className="first-card">
                                    <img className="first-card-img" src="https://www.tourism.gov.np//images/right_photo_images/22.jpg" alt="" />
                                </div>
                                <div className="first-card-second">
                                    <div className="first-card-fist-p-main">
                                        <div className="first-card-fist-p">
                                            डा. टोकराज पाण्डे
                                        </div>
                                        <div className="first-card-second-p">
                                            सह-सचिव
                                        </div>
                                    </div>
                                    <div className="first-card-third-p-container">
                                        <p className="first-card-third-p-second-third">प्रवक्ता</p>
                                        <p className="first-card-third-p-second-third">०१-४२११६२०</p>
                                    </div>
                                    <div className="first-card-img-main">
                                        <div className="first-card-facebook-img">
                                            <img className="first-card-facebook-img-main" src="https://www.tourism.gov.np/web/img/tw.svg" alt="" />
                                        </div>
                                        <div className="first-card-twitter-img">
                                            <img className="first-card-twiiter-img-main" src="https://www.tourism.gov.np/web/img/fb.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="first-card-container first-card-container-margin">
                                <div className="first-card-second first-card-second-third">
                                    <div className="first-card-fist-p-main">
                                        <div className="first-card-fist-p">
                                        मोबाइल एप्स डाउनलोड गर्नुहोस्
                                        </div>
                                    </div>
                                    <div className="first-card-img-main first-card-img-main-second first-card-img-main-second-third first-card-img-main-second-third2">
                                        <div className="first-card-google-img">
                                            <img className="first-card-google-img-main" src="https://www.tourism.gov.np/web/img/getgplay.png" alt="" />
                                        </div>
                                        <div className="first-card-appstore-img">
                                            <img className="first-card-appstore-img-main" src="https://www.tourism.gov.np/web/img/app-store.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default Secondsection;