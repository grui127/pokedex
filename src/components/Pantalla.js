import '../styles/pantalla.css'

export function Pantalla({pokemon = {}}){
return(
    <div className="pantalla">
        <h3>ID: {pokemon.order}  Nombre: {pokemon.name?.replaceAll("-"," ")}</h3>
        <div className='cuadro'>
            <img src={pokemon.sprites ===  undefined ? "./images/R.jpeg" :pokemon.sprites.other["official-artwork"]["front_default"]} alt={pokemon.name} className="imagen"/>
        </div>
        <div className='stats'>
            <h4>Estadisticas base:</h4>
            <ul>
                {pokemon.stats === undefined ? "" :  pokemon.stats.map(el=> 
                <li>{el.stat.name.replaceAll("-"," ")}: {el["base_stat"]}</li>)}
            </ul>
        </div>
        <div className='caracteristicas'>
            <p>Altura: {pokemon.height}0 Cm - Peso: {pokemon.weight}00 G</p>
            <p>Tipo: 
                {pokemon.types === undefined ? "" :  pokemon.types.map(el=> <span className={el.type.name}>{el.type.name}</span>)}</p>
        </div>
    </div>
)
}
