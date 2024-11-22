import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const moveRandomly = () => {
      const randomX = Math.random() * (window.innerWidth - 100); // Subtraímos a largura aproximada do logo
      const randomY = Math.random() * (window.innerHeight - 100); // Subtraímos a altura aproximada do logo
      setPosition({ top: randomY, left: randomX });
    };

    const interval = setInterval(moveRandomly, 1000); // Move a cada 1 segundo

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt={logo}
          style={{
            position: "absolute",
            top: position.top,
            left: position.left,
            transition: "top 0.01s ease, left 0.1s ease",
          }}
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
