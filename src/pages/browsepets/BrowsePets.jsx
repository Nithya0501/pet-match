import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./BrowsePets.scss";
import arrow from "../../assets/arrow.svg";
import browsefoot from "../../assets/browse-foot.svg";
import browsefoot1 from "../../assets/browse-foot1.png";
const BrowsePets = () => {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
 

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("data/petlist.json")
      .then((res) => {
        setPets(res.data);
        setFilteredPets(res.data);
      })
      .catch((err) => console.error("API error:", err));
  }, []);

  useEffect(() => {
    let filtered = [...pets];
    console.log(filtered, 'pets')

    if (selectedType) {
      filtered = filtered.filter(pet => pet.type === selectedType);
    }

    if (selectedLocation) {
      filtered = filtered.filter(pet => pet.location === selectedLocation);
    }
    if (selectedAge) {
      filtered = filtered.filter(pet => pet.age === selectedAge);
    }
    if (selectedGender) {
      filtered = filtered.filter(pet => pet.gender === selectedGender);
    }

    setFilteredPets(filtered);
  }, [selectedType, selectedLocation, selectedAge, selectedGender, pets]);

  const clearFilters = () => {
    setSelectedType("");
    setSelectedLocation("");
    setSelectedAge("");
    setSelectedGender("")
  };

  return (<>
    <div className="browse-container">
      <div className='left-side-design'><img src={browsefoot} alt="foot-left" />
      </div>
      <div className='left-foot'><img src={browsefoot1} alt="foot-left1" /></div>
      <div className='browse-arrow' onClick={() => navigate(-1)}> <img src={arrow} alt="Arrow" /><p>Browse Pets</p>

      </div>
      <div className='browse-heading'><p> FILTERS:</p></div>

      <div className="filters">
        <div className='filter-select'>
          <div>
            <select onChange={(e) => setSelectedType(e.target.value)} value={selectedType}>
              <option value="">Pet Type</option>
              <option value="Cat">Cat</option>
              <option value="Dog">Dog</option>
              <option value="Birds">Birds</option>
            </select>
          </div>
          <div>
            <select onChange={(e) => setSelectedLocation(e.target.value)} value={selectedLocation}>
              <option value="">Location</option>
              <option value="Chennai">Chennai</option>
              <option value="Mumbai">Mumbai</option>
            </select>
          </div>
          <div>
            <select onChange={(e) => setSelectedAge(e.target.value)} value={selectedAge}>
              <option value="">Age</option>
              <option value="1 Yr">1Y</option>
              <option value="2 Yr">2Y</option>
            </select>
          </div>
          <div>
            <button onClick={clearFilters} className="clear-button">Clear All</button>
          </div>
        </div>
      </div>
      <div className="cards-container">
        {filteredPets.length > 0 ? (
          filteredPets.map((pet) => (
            <div className="pet-card" key={pet.id}>
              <img src={pet.image} alt={pet.name} className="pet-image" />
              <div className="card-body">
                <h3 className="pet-name">{pet.name}</h3>
                <p className="pet-info">{`${pet.age}, ${pet.gender}`}</p>
                <p className="pet-location">{pet.location}</p>
                <button className='view-btn' onClick={()=>navigate("/PetsProfile",{state:{pet}})}>View Profile</button>

              </div>
            </div>
          ))
        ) : (
          <p>No pets found.</p>
        )}


      </div>

    </div>
    </>
  );
};

export default BrowsePets;





