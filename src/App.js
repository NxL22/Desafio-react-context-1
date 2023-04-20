import { BrowserRouter } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Router from './Components/Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Context from './context';
import { useEffect, useState } from 'react';


function App() {

  const [characters, setCharacters] = useState([])
  const globalState = { characters, setCharacters }

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results.map(val => {
        return { ...val, favoritos: false }
      })))
  }, [])


  return (
    <Context.Provider value={globalState}>
      <BrowserRouter>
        <NavBar />
        <Router />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
