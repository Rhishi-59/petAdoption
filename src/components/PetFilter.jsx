import  { useState } from 'react';
import './PetFilter.css';


function PetFilter({ pets, setFilteredPets }) {
  const [type, setType] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');

  const handleFilter = () => {
    const filtered = pets.filter((pet) => {
      return (
        (type ? pet.type === type : true) &&
        (age ? pet.age === age : true) &&
        (location ? pet.location === location : true)
      );
    });
    setFilteredPets(filtered);
  };

  return (
    <div className="pet-filter">
      <select onChange={(e) => setType(e.target.value)} value={type}>
        <option value="">Select Type</option>
        <option value="Dog">Dog</option>
        <option value="Mouse">Mouse</option>
        <option value="Tiger">Tiger</option>
        <option value="Cat">Cat</option>
        <option value="Elephant">Elephant</option>
        
      </select>

      <select onChange={(e) => setAge(e.target.value)} value={age}>
        <option value="">Select Age</option>
        <option value="1">1 year</option>
        <option value="2">2 years</option>
        <option value="3">3 years</option>
        <option value="4">4 years</option>
        <option value="5">5 years</option>
        
      </select>

      <select onChange={(e) => setLocation(e.target.value)} value={location}>
        <option value="">Select Location</option>
        <option value="New York">New York</option>
        <option value="California">California</option>
        <option value="China">China</option>
        <option value="India">India</option>
        <option value="Indonesia">Indonesia</option>
      </select>

      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default PetFilter;
