import './App.css'
import React, { useState } from 'react';

function App() {
    const [name, setName] = useState("Sofía");
    const [newName, setNewName] = useState('');
  
    
    const changeName = () => {
      if (newName.trim() !== '') {
        setName(newName);
        setNewName('');
      }
    };
  
    return (
      <div>
        {/* 3. Rendre le titre avec le nom actuel du professeur */}
        <h2>Nom du professeur : {name}</h2>
  
        {/* 4. Rendre la liste des noms de professeurs */}
        <ul>
          <li onClick={() => setName("Data")}>Data</li>
          <li onClick={() => setName("Reyes")}>Reyes</li>
          <li onClick={() => setName("Yolanda")}>Yolanda</li>
        </ul>
  
        {/* Bonus : Rendre le formulaire pour changer le nom */}
        <form onSubmit={(e) => {
          e.preventDefault();
          changeName();
        }}>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="ajouter un nom"
          />
          <button type="submit">Ajouter</button>
        </form>
      </div>
    );
  };


export default App
