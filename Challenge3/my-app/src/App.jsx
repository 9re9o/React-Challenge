import React from 'react';
import './App.css';

function showText(){
  return (<p> Im here!. Att The div</p>);
}

function App(){
  const [showDiv, setShowDiv] = React.useState(true); 
  // la variable showDiv inicializada con el valor true, y una función
  // para actualizar ese valor llamada setShowDiv, 
  // y asigna estos valores a las variables showDiv y setShowDiv, respectivamente.

  return (
    <>
    <div>
        {/* el botón y el texto si 'showDiv' es verdadero, o el botón para mostrar el div si 'showDiv' es falso */}
        {showDiv ? (
          <>
            {/* cuando el botton es presionado llama a showDiv uy lo pone en falso */}
            <button onClick={() => setShowDiv(false)}> Hide div Element </button>
            {showText()}
          </>
        ) : (
          /* cuando el botton es presionado llama a showDiv uy lo pone en verddero */
          <button onClick={() => setShowDiv(true)}> Show div Element </button>
        )}
      </div>
    </>
  );
}

export default App;