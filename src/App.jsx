import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PetProfile from './components/PetProfile';
import PetForm from './components/PetForm';

function App() {
  const pets = [
    { id: 1, name: 'Max', type: 'Dog', age: '2', location: 'New York', description: 'Friendly dog' },
    { id: 2, name: 'Bella', type: 'Cat', age: '1', location: 'California', description: 'Loves cuddles' },
    { id: 3, name: 'Tomy', type: 'Mouse', age: '2', location: 'China', description: 'Loves parties' },
    { id: 4, name: 'Chomu', type: 'Tiger', age: '3', location: 'India', description: 'Loves non-veg' },
    { id: 5, name: 'Mangu', type: 'Elephant', age: '5', location: 'Indonesia', description: 'Loves water' }
    
    
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

