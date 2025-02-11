import { useParams } from 'react-router-dom';
import './PetProfile.css';


function PetProfile({ pets }) {
  const { id } = useParams();
  const pet = pets.find((pet) => pet.id === parseInt(id));

  if (!pet) return <p>Pet not found</p>;

  return (
    <div>
      <h1>{pet.name}</h1>
      <p>Type: {pet.type}</p>
      <p>Age: {pet.age}</p>
      <p>Location: {pet.location}</p>
      <p>{pet.description}</p>
    </div>
  );
};

export default PetProfile;
