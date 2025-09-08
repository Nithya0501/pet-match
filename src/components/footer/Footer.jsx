import React from "react";
import "./Footer.scss";
import dogfoot from "../../assets/footer-foot.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/Instagram.svg";
function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-whole">
                    <div className="footer-section brand">
                        <p className="heading-color"><img src={dogfoot} alt="Dog foot" />pet match</p>
                        <p>Pet Match is a user-friendly pet adoption platform that
                            helps connect loving homes with rescued
                            and shelter animals. Browse pets, book visits, and
                            adopt with ease — all in a few simple steps.</p>
                    </div>
                    <div className="footer-section policies">
                        <ul>
                            <li><a href="/provacy policy">Privacy Policy</a></li>
                            <li><a href="/refund policy">Refund Policy</a></li>
                            <li><a href="terms of use">Terms of Use</a></li>
                        </ul>
                    </div>
                    <div className="footer-section links">
                        <p className="title-link">Quick Links </p>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/browsepets">Browse Pets</a></li>
                            <li><a href="/petsprofile">Pets Profile</a></li>
                            <li><a href="/about">About</a></li>
                        </ul>
                    </div>
                    <div className="footer-section contact">
                        <p className="title-contact">Contact Info:</p>
                        <ul>Phone: +91 98765 43210</ul>
                        <ul>Email: support@petmatch.com</ul>
                        <ul><img src={facebook} alt="Facebook" /><a className="app-contact1" href="facebook">Facebook</a></ul>
                        <ul><img src={instagram} alt="Instagram" /><a className="app-contact2" href="instagram">Instagram</a></ul>
                    </div>
                </div>
                <div>© 2025 Pet Match. All rights reserved.</div>
            </div>
        </>

    );
}
export default Footer;