import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MostrarPokemones = () => {
  const [info, setInfo] = useState([]);
  const { namePokemon } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${namePokemon}`;

  useEffect(() => {
    const traeDetalle = async () => {
      const res = await fetch(url);
      const data = await res.json();

      setInfo(data);
      console.log(data);
    };
    traeDetalle();
  }, []);

  return (
    <>
      <h1>Selecciona un Pokemon</h1>
      <div className="gallery grid-columns-5 p-3">
        {info.map((datopokemon, i) => {
          return (
            <div>
              <p key={i}>
                {datopokemon.stat.name}: <span>{datopokemon.base_stat}</span>
              </p>
            </div>
          );
        })}
      </div>
      <img
        /* IMG PKMNS */
        src={info.sprites ? info.sprites.front_default : ""}
        className="img-fluid rounded-start"
        alt={info.name}
        style={{ maxHeight: "15rem" }}
      />
    </>
  );
};

export default MostrarPokemones;
