import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import Nav from "./components/Nav";
import ContextApiProvider from "./components/context/Context";
import MostrarPokemones from "./components/MostrarPokemones";
function App() {
  return (
    <div>
      <ContextApiProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/pokemones" element={<Pokemones></Pokemones>}></Route>
          <Route
            path="/mostrarpokemones/:namePokemon"
            element={<MostrarPokemones></MostrarPokemones>}
          ></Route>
          <Route path="*" element={<h1>Ruta no valida</h1>}></Route>
        </Routes>
      </ContextApiProvider>
    </div>
  );
}

export default App;
