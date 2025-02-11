import { useState, useEffect } from 'react';
import PetCard from '../components/PetCard';
import PetFilter from '../components/PetFilter';

function Home() {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);

  
  useEffect(() => {
    const petData = [
      { id: 1, name: 'Max', type: 'Dog', age: '2', location: 'New York', description: 'Friendly dog' },
      { id: 2, name: 'Bella', type: 'Cat', age: '1', location: 'California', description: 'Loves cuddles' },
      { id: 3, name: 'Tomy', type: 'Mouse', age: '2', location: 'China', description: 'Loves parties' },
      { id: 4, name: 'Chomu', type: 'Tiger', age: '3', location: 'India', description: 'Loves non-veg' },
      { id: 5, name: 'Mangu', type: 'Elephant', age: '5', location: 'Indonesia', description: 'Loves water' }
      
    ];
    setPets(petData);
    setFilteredPets(petData);
  }, []);

  return (
    <div>
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
