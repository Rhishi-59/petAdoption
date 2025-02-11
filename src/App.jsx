import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PetProfile from './components/PetProfile';
import PetForm from './components/PetForm';
import cat from "./assets/cat.jpg"
import dog from "./assets/dog.webp"
import mouse from "./assets/mouse.webp"
import tiger from "./assets/tiger.jpg"
import elephant from "./assets/elephant.jpg"


function App() {
  const pets = [
    { id: 1, name: 'Max', type: 'Dog', age: '2', location: 'New York', description: 'Friendly dog', image: dog },
    { id: 2, name: 'Bella', type: 'Cat', age: '1', location: 'California', description: 'Loves cuddles', image: cat },
    { id: 3, name: 'Tomy', type: 'Mouse', age: '2', location: 'China', description: 'Loves parties', image: mouse },
    { id: 4, name: 'Chomu', type: 'Tiger', age: '3', location: 'India', description: 'Loves non-veg', image: tiger},
    { id: 5, name: 'Mangu', type: 'Elephant', age: '5', location: 'Indonesia', description: 'Loves water', image: elephant}
    
    
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home petData={pets}/>} />
        <Route path="/pet/:id" element={<PetProfile pets={pets} />} />
        <Route path="/adopt" element={<PetForm />} />
      </Routes>
    </Router>
  );
};

export default App;

