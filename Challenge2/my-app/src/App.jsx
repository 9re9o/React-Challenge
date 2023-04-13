import React from 'react';
import './App.css';

const Animals = [{name: "Tiger", id: 1 },
            { name: "Lion", id: 2 },
            { name: "Python", id: 3 }];

function App() {
  return (
    <>
    <div>
      <ul>
        {Animals.map((element) => (
          <li>
            {element.name}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default App;