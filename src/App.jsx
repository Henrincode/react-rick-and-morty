import "./App.css";
import imagemRick from "./assets/rick.jpg";

function App() {
  return (
    <>
      <div id="card">
        <div className="titulo">
          
          <h1>Rick Sanchez
          <div className="bar"></div>
          </h1>
        </div>
        <div className="tags">
          <p>Status: Vivo</p>
          <p>Espécie: Humana</p>
          <p>Origem: Terra C-137</p>
        </div>
        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
      </div>
    </>
  );
}

export default App;
