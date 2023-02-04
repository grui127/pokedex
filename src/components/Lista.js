import '../styles/lista.css'
import {useState, useMemo} from 'react'

export function Lista({pokelista, elegir}){
    const [letras, setLetras] = useState();
    const filtroPokemon = useMemo(() => {
    if (!letras) {
        return pokelista;
    }
    return pokelista.filter(( {name} ) => name.includes(letras));
    }, [letras, pokelista]);

    return (
        <div className="lista">
        <input value={letras} onChange={(e) => setLetras(e.target.value)} placeholder="Buscar aqui..."/>
        <ul>
        {filtroPokemon.map((fi) => {
            return (
                <li key={fi.url}>
                    <button  
                        onClick={()=>{elegir(fi.url)}}>
                        {fi.name}
                    </button>
                </li>
            );
        })}
        </ul>

        </div>
    );
}
