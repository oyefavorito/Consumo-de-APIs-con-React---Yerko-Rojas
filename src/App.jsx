import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Buscador from "./components/Buscador";
import MiApi from "./components/MiApi";

function App() {
  const [info, setInfo] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const handleSearch = (searchTerm) => {
    setBusqueda(searchTerm);
  };

  return (
    <>
      <header>
        <h1>Game of Thrones: Personajes </h1>
      </header>

      <Buscador onSearch={handleSearch} />

      <section className="personajes">
        <MiApi info={info} setInfo={setInfo} busqueda={busqueda} />
      </section>
    </>
  );
}

export default App;
