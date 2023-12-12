import axios from "axios";
// crear el contexto
import { createContext, useEffect, useState } from "react";
//proveed el contexto
export const ContextApi = createContext({});

//consumir el context
const ContextApiProvider = ({ children }) => {
  const [dato, setDato] = useState([]);
  useEffect(() => {
    datos();
  }, []);

  const url = "https://pokeapi.co/api/v2/pokemon";
  const datos = async () => {
    await axios
      .get(url)
      .then(function (response) {
        setDato(response.data.results);
        // console.log(response.data.results);
      })
      .catch(function (error) {});
  };
  return (
    <ContextApi.Provider value={{ dato, setDato }}>
      {children}
    </ContextApi.Provider>
  );
};
export default ContextApiProvider;
