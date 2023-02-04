
import './App.css';
import { useEffect, useState } from "react";
import {helpHttp} from './helpers/helpHttp.js'
import { Lista } from './components/Lista';
import { Pantalla } from './components/Pantalla';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  const [pokemons, setPokemons] = useState([])
  const [pokemon, setPokemon] = useState({})

  useEffect(()=>{
    let api = helpHttp();
    let url = "https://pokeapi.co/api/v2/pokemon?limit=1000"
    api.get(url).then(res=>setPokemons(res.results)).catch(err=>console.log(err))
},[])

const elegir = (url) =>{
  let api = helpHttp();
  api.get(url).then(res=>setPokemon(res)).catch(err=>console.log(err))
}

  return(
    <div className='body'>
    <Header/>
    <Lista pokelista={pokemons} elegir={elegir} />
    <Pantalla pokemon={pokemon}/>
    <Footer/>
    </div>
  )
}

export default App;
