import React from "react";

function Footer () {
    return (
        <div className="pie">
            <footer className="top">
                <img src="/icon5.svg" className="sneak" alt="" />
                <div className="links">
                    <div className="info">
                        <h2>INFORMATION</h2>
                        <a href="/AboutUs" className="one">About Us</a>
                        <a href="/ManSneakers" className="two">Man</a>
                        <a href="/WomanSneakers" className="three">Woman</a>
                        <a href="/FrecuentQs" className="four">Help</a>
                    </div>
                    <div className="contact">
                        <h2>CONTACT US</h2>
                        <p className="redes"><img src="/instagram.svg" id="location" alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@sneakerheads_med</p>
                        <p className="redes"><img src="/facebook.svg" id="location" alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@sneakerheads_med</p>
                        <p className="redes"><img src="/whatsapp.svg" id="location" alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@+57 3123478954</p>
                        <p className="redes"><img src="/gmail.svg" id="location" alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sneakerheadsmedellin@gmail.com</p>
                    </div>
                </div>
            </footer>
            <footer className="bottom">
                <div className="legal">
                    <span>© 2023 SNEAKERHEADS - All rights reserved</span>
                    <img src="/location.svg" id="location" alt="" />
                    <span>Colombia, Medellín</span>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
