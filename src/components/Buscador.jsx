import React, { useState } from "react";
import "./buscador.css";

function Buscador({ onSearch }) {
  const [busqueda, setBusqueda] = useState("");

  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };

  const handleSearch = () => {
    onSearch(busqueda);
  };

  return (
    <>
      <nav>
        <input
          id="input"
          type="text"
          placeholder="Encuentra tu favorito"
          className="form-control-lg mb-3 mt-3 text-center font-weight-bold"
          value={busqueda}
          onChange={handleChange}
        />{" "}
        {""}
        <button
          id="boton"
          className="btn btn-lg btn-block mb-3 mt-3 font-weight-bold"
          onClick={handleSearch}
        >
          {""}Buscar{""}
        </button>
      </nav>
    </>
  );
}

export default Buscador;
