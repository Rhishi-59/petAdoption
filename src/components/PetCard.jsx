import { Link } from 'react-router-dom';
import './PetCard.css';


function PetCard({ pet }) {
  return (
    <div className="pet-card">
      <h2>{pet.name}</h2>
      <p>{pet.type} - {pet.age} years old</p>
      <p>Location: {pet.location}</p>
      <p>{pet.description}</p>
      <Link to={`/pet/${pet.id}`}>View Profile</Link>
    </div>
  );
};

export default PetCard;
