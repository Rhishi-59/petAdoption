import { useState, useEffect } from 'react';
import PetCard from '../components/PetCard';
import PetFilter from '../components/PetFilter';
import './Home.css';

function Home({petData}) {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);

  
  useEffect(() => {
    
    setPets(petData);
    setFilteredPets(petData);
  }, []);

  return (
    <div className='home'>
      <h1>Pet Adoption</h1>
      <PetFilter pets={pets} setFilteredPets={setFilteredPets} />
      <div className="pet-list">
        {filteredPets.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default Home;
