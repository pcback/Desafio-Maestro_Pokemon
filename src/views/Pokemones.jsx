import React, { useContext, useState } from "react";
import { ContextApi } from "../components/context/Context";
import { useNavigate } from "react-router-dom";

const Pokemones = () => {
  const { dato, setDato } = useContext(ContextApi);

  const navigate = useNavigate();

  const [seleccion, setSeleccion] = useState("");

  const Mostrarpokemon = () => {
    navigate(`/mostrarpokemones/${seleccion}`);
  };

  return (
    <>
      <h1>Selecciona un Pokemon</h1>
      <div className="gallery grid-columns-5 p-3">
        <select
          name="Pokemones"
          id="selector"
          onChange={(event) => setSeleccion(event.target.value)}
        >
          {dato.map((pokemon, i) => {
            return (
              <option key={i} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        <button onClick={() => Mostrarpokemon()}>Ver detalle</button>
      </div>
    </>
  );
};

export default Pokemones;
