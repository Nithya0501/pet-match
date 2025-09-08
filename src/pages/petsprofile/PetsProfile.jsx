import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './PetsProfile.scss';
import arrow from '../../assets/arrow.svg';

function PetsProfile() {
  const navigate = useNavigate();
  const location = useLocation();
  const petFromState = location.state?.pet;

  const [pet, setPet] = useState(petFromState || null);
  const [selectedImage, setSelectedImage] = useState(petFromState?.image || '');
  const [similarPets, setSimilarPets] = useState([]);

  useEffect(() => {
    if (location.state?.pet) {
      setPet(location.state.pet);
      setSelectedImage(location.state.pet.image);
    }
  }, [location.state]);


  useEffect(() => {
    if (!pet) return;

    fetch('data/petlist.json')
      .then(res => res.json())
      .then(data => {
        const filtered = data
          .filter(p => (p.type === pet.type || p.location === pet.location) && p.name !== pet.name)
          .slice(0, 4);
        setSimilarPets(filtered);
      });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pet]);

  if (!pet) return <div className="error">No pet selected</div>;

  const pictures = Object.values(pet.owner?.picture || {});

  return (
    <div className="pet-profile">
      <div className="pets-arrow" onClick={() => navigate(-1)}>
        <img src={arrow} alt="Arrow" />
        <p>View Profile</p>
      </div>

      <div className="pet-profile-details">
        <div className="pet-profile-container">
          <div className="profile-image">
            <img src={selectedImage} alt={pet.name} />
          </div>
          <div className="pet-picture">
            {pictures.map((pic, index) => (
              <img
                key={index}
                src={pic}
                alt={`thumb-${index}`}
                className={`thumbnail ${selectedImage === pic ? 'active' : ''}`}
                onClick={() => setSelectedImage(pic)}
              />
            ))}
          </div>
        </div>

        <div className="profile-details-whole">
          <div className="profile-right">
            <div className="pet-details">
              <div className="row"><span className="label">Name:</span><span className="value">{pet.name}</span></div>
              <div className="row"><span className="label">Age:</span><span className="value">{pet.age}</span></div>
              <div className="row"><span className="label">Breed:</span><span className="value">{pet.breed || 'N/A'}</span></div>
              <div className="row"><span className="label">Gender:</span><span className="value">{pet.gender}</span></div>
              <div className="row"><span className="label">Vaccinated:</span><span className="value">{pet.vaccinated}</span></div>
              <div className="row"><span className="label">Trained badges:</span><span className="value">{pet.trained_badges}</span></div>
              <div className="row"><span className="label">Location:</span><span className="value">{pet.location}</span></div>
            </div>

            <div className="divider"></div>

            <div className="owner-details">
              <div className="row"><span className="label">Owner:</span><span className="value">{pet.owner?.name || 'N/A'}</span></div>
              <div className="row"><span className="label">Shelter:</span><span className="value">{pet.owner?.shelter || '-'}</span></div>
              <div className="row"><span className="label">Contact:</span><span className="value">{pet.owner?.contact || 'N/A'}</span></div>
              <div className="row"><span className="label">Visiting Hours:</span><span className="value">{pet.owner?.available_visiting_hours || 'N/A'}</span></div>
            </div>
          </div>

          <div className="book-btn">
            <button className="visit-button" onClick={() => navigate("/about", {
              state: {
                pet: { name: pet.name }
              }
            })}>Book a Visit</button>
          </div>
        </div>
      </div>

      <div className="similar-pets-section">
        <h3>Discover Similar Pets</h3>
        <div className="similar-pets-grid">
          {similarPets.map((similarPet, index) => (
            <div
              key={index}
              className="similar-pet-card"
              onClick={() => navigate('/PetsProfile', { state: { pet: similarPet } })}
            >
              <img src={similarPet.image} alt={similarPet.name} />
              <h4>{similarPet.name}</h4>
              <p>{similarPet.age}, {similarPet.gender}</p>
              <p>{similarPet.location}</p>
              <button className="view-btn">View Profile</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PetsProfile;






