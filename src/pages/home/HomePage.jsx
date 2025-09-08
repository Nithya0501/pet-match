import React, { useState, useEffect } from "react";
import "./Homepage.scss";
import { useNavigate } from "react-router-dom";
import HowItWorks from "../howitsworks/Howitsworks"
import bannerimge from "../../assets/banner.png";
import pettransport from "../../assets/easy-transport.png";
import original from "../../assets/original.png";
import certified from "../../assets/certified.png";
import secure from "../../assets/secure.png";
import click from "../../assets/click.png";
import petsGroup from "../../assets/friends.png";
import yellowSparkle from "../../assets/yellowSparkle.png";
import yellowShapes from "../../assets/frdsroundshape.png";
import leftarrow from "../../assets/left-arrow.png";
import rightarrow from "../../assets/right-arrow.png";
function Homepage() {
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);
    const prevSlide = () => {
        if (index > 0) setIndex(index - 1);
    };
    const nextSlide = () => {
        if (index < pets.length - 3) setIndex(index + 1);
    };
    const [pets, setPets] = useState([]);
    useEffect(() => {
        fetch("data/petlist.json")
            .then((res) => res.json())
            .then((data) => setPets(data));
    }, []);

    return (
        <>
            <div className="homepage">
                <section className="top-banner">
                    <div className="banner-inner">
                        <div className="banner-text">
                            <h2> “Find your forever friend”</h2>
                            <p>"Browse hundreds of lovable pets waiting for their forever homes." "Browse hundreds of lovable pets waiting for their forever homes.""Browse hundreds of lovable pets waiting for their forever homes."</p>
                            <div className="btn">
                                <a href="browsepets" className="browsebtn"> Browse Pets</a>
                                <a href="#view-pet" className="listbtn"> List Your Pet </a>
                            </div>
                        </div>
                        <div>
                            <img src={bannerimge} alt="banner" className="banner-img" />
                        </div>
                    </div>
                </section>
                <HowItWorks />

                <section>
                    <div className="pet-carousel">
                        <h2 className="title" id="view-pet">List Your Pet</h2>

                        <div className="carousel-wrapper">
                            <button className="nav-btn left" onClick={prevSlide}>
                                <img src={leftarrow} alt="left" className="arrow" />
                            </button>

                            <div className="cards-container">
                                {pets.slice(index, index + 3).map((pet) => (
                                    <div className="pet-card" key={pet.id}>
                                        <img src={pet.image} alt={pet.name} className="pet-image" />
                                        <div className="card-body">
                                            <h3 className="pet-name">{pet.name}</h3>
                                            <p className="pet-info">{pet.age}</p>
                                            <p className="pet-location">{pet.location}</p>
                                            <button className='view-btn' onClick={() => navigate("/PetsProfile", { state: { pet } })}>View Profile</button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button className="nav-btn right" onClick={nextSlide}>
                                <img src={rightarrow} alt="right" className="arrow" />
                            </button>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="whychoose">
                        <h2>Why Choose Pet Match?</h2>
                        <div className="petchoose">
                            <div>
                                <img src={pettransport} alt="Easy & Transparent Booking" />
                            </div>
                            <div>
                                <img src={original} alt="No spam, no scams" />
                            </div>
                            <div>
                                <img src={certified} alt="Support Local Shelters" />
                            </div>
                            <div>
                                <img src={secure} alt="Verified Listings Only" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ourservices">
                    <h2> Our Services:</h2>
                    <div className="services">
                        <div className="one">
                            <p><img src={click} alt="Tickmark green" />List Your Pet for Adoption</p>
                            <p><img src={click} alt="Tickmark green" />Location-Based Pet Search</p>
                            <p><img src={click} alt="Tickmark green" />Adoption Follow-Up Assistance</p>
                        </div>
                        <div className="two">
                            <p><img src={click} alt="Tickmark green" />Vaccination & Health Info</p>
                            <p><img src={click} alt="Tickmark green" />Visit Scheduling & Payments</p>
                            <p><img src={click} alt="Tickmark green" />Pet Adoption Support</p>
                        </div>
                    </div>

                </section>
                <section className="pets-banner">
                    <img src={yellowShapes} alt="round" className="decor-shapes" />
                    <img src={yellowSparkle} alt="star" className="decor-sparkle" />
                    <img src={petsGroup} alt="Pets" className="pets-image" />

                    <div className="banner-content">
                        <h2>"Find your forever friend"</h2>
                        <p>Browse hundreds of lovable pets waiting for their forever homes.</p>
                        <a href="browsepets" className="browsebtn">Browse Pets</a>
                    </div>

                </section>
            </div>


        </>
    );
}
export default Homepage;