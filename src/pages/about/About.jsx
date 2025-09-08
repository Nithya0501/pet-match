import React, { useState, useEffect } from "react";
import "./About.scss";
import arrow from "../../assets/arrow.svg";
import { useNavigate, useLocation } from "react-router-dom";
import uparrow from "../../assets/up-arrow.png";
import tickpopup from "../../assets/tick-popup.png";
import closepopup from "../../assets/close-popup.png";

import Modal from "react-modal";
Modal.setAppElement("#root");

const VisitBooking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pet} = location.state || {};
  const [petName, setPetName] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const closeModal = () => setModalIsOpen(false);
  const [error, setError] = useState("");
  useEffect(() => {
    if (pet?.name) setPetName(pet.name);
  }, [pet]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!timeSlot) return alert("Please select a time slot");
     setError("");
    setModalIsOpen(true);
  };
  if (!pet) {
    return <div>No pet selected. Please go back and choose a pet.</div>;
  }

  const options = [
    { value: "Morning", label: "Morning (10am-12pm)" },
    { value: "Afternoon", label: "Afternoon (1pm-4pm)" },
    { value: "Evening", label: "Evening (5pm-7pm)" },
  ];

  return (
    <>
      <section className="visit-booking">
        <div className="container">
          <div className="arrow" onClick={() => navigate("/browsepets")}>
            <img src={arrow} alt="Arrow" />
            <p>Visit Booking</p>
          </div>

          <form onSubmit={handleSubmit} className="booking-form">
            <div className="form-group">
              <label> Basic Info Auto-filled:</label>
              <input type="text" name="petName" value={petName} readOnly />

            </div>

            <div className="form-group">
              <input type="text" name="userName" placeholder="UserName" required/>
            </div>

            <div className="form-group">
              <input type="text" name="visitLocation" placeholder="location" required />
              {error && <p className="error">{error}</p>}
            </div>


            <div className="form-group">
              <div
                className="dropdown-header"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>
                  {timeSlot ? `Preferred Time: ${timeSlot}` : "Preferred Time Slot"}
                </span>
                <img
                  src={uparrow}
                  alt="toggle" className="drop-img"

                />
              </div>
              {dropdownOpen && (
                <div className="time-slot-options">
                  {options.map((option) => (
                    <div
                      key={option.value}
                      className={`time-slot ${timeSlot === option.value ? "selected" : ""}`}
                      onClick={() => {
                        setTimeSlot(option.value);
                        setDropdownOpen(false);
                      }}
                    >
                      <label className="container">
                        <input
                          type="radio"
                          name="timeSlot"
                          checked={timeSlot === option.value}
                          onChange={() => setTimeSlot(option.value)}
                        />
                        <span className="text">{option.label}</span>
                      </label>
                    </div>
                  ))}
                </div>
              )}

            </div>
            <div className="form-action">
              <button type="submit" className="done-btn">
                Done
              </button>

            </div>
          </form>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="success-modal"
          overlayClassName="modal-overlay"

        >
          <div className="modal-content">

            <button className="close-btn" onClick={closeModal}>
              <img src={closepopup} alt="close" />
            </button>
            <img src={tickpopup} alt="success" className="tickpopup" />
            <p>
              Your visit has been booked successfully! <br />
              You'll receive confirmation soon via email/phone.
            </p>
            <button
              className="home-btn"
              onClick={() => {
                setModalIsOpen(false);
                navigate("/");
              }}
            >
              Back to Home
            </button>

          </div>
        </Modal>



      </section >

    </>
  );
};

export default VisitBooking;

