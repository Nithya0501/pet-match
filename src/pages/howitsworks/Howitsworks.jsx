import React from "react";
import browse from "../../assets/browse.svg";
import map from "../../assets/map.svg";
import dog from "../../assets/dog.svg";
import group1 from "../../assets/group1.svg";
import group2 from "../../assets/group2.svg";
import group3 from "../../assets/group3.svg";
import petfoot1 from "../../assets/pet-foot1.svg";
import petfoot3 from "../../assets/pet-foot3.svg";
import petfoot2 from "../../assets/pet-foot2.svg";
import "./Howitsworks.scss";

const HowItWorks = () => {
    return (
        <>
            <div className="pet-container">
                <div className="step">
                    <img src={group1} alt="Step 1" className="step-img" />
                    <div className="text">
                        <h1>How It Works:</h1>
                        <h3>
                            ➜ Browse <img src={browse} alt="browsesearch" className="icon-img" />
                        </h3>
                        <p>
                            Explore hundreds of lovable pets from different shelters and homes.
                            Filter by type, age, and location to find your perfect match.
                        </p>
                    </div>
                    <img src={petfoot1} className="paw paw1" alt="pet-paw1" />
                </div>

                <div className="step reverse step-two">
                    <img src={group2} alt="Step 2" className="step-img step-two-align" />
                    <div className="text">
                        <h3>
                            ➜ Book Visit ( ₹ 50 / ₹ 100 ) <img src={map} alt="map" className="icon-img" />
                        </h3>
                        <p>
                            Book a slot to meet them in person at their current shelter or foster home.
                            (Booking helps reduce fake requests and supports rescue efforts.)
                        </p>
                    </div>
                </div>

                <img src={petfoot2} alt="paw pet-foot2" className="paw paw2" />

                <div className="step">
                    <img src={group3} alt="Step 3" className="step-img step-three" />
                    <div className="text">
                        <img src={petfoot3} className="paw paw3" alt="paw paw3" />
                        <h3>
                            Adopt! <img src={dog} alt="Dog" className="icon-img" />
                        </h3>
                        <h3>Loved your visit?</h3>
                        <p>
                            Proceed with a simple adoption process and bring home your new best friend.
                            We guide you through every step, stress-free!
                        </p>
                    </div>
                </div>
            </div>
        </>

    );

};

export default HowItWorks;
