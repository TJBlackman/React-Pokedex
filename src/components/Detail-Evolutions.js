import React from 'react'; 

export default function DetailEvolutions (props) {

  const all_pokemon = props.pokemon;
  const current_pokemon = props.currentPokemon;

  const getPokemonObject = (num) => all_pokemon.find(item => item.num === num);

  const aggregateAndSortEvolutions = () => {
    const evolutionsArray = [];
    if (current_pokemon.prev_evolution){
      current_pokemon.prev_evolution.forEach(item => {
        const p = getPokemonObject(item.num);
        if (!evolutionsArray.includes(p)){ evolutionsArray.push(p); }
      })
    }
    if (current_pokemon.next_evolution){
      current_pokemon.next_evolution.forEach(item => {
        const p = getPokemonObject(item.num);
        if (!evolutionsArray.includes(p)){ evolutionsArray.push(p); }
      })
    }
    console.log(evolutionsArray)
    return evolutionsArray;
  }

  const evolutionIcons = () => {
    return aggregateAndSortEvolutions().map(pokemon => {
      return <div onClick={() => props.showPokemonDetails(pokemon.id)} className="hover-pointer" key={pokemon.id}>
        <img src={pokemon.img} alt={pokemon.name} />
        <p className="text-center">{pokemon.name}</p>
      </div>
    });
  }


  







  return (
    <div>
      {aggregateAndSortEvolutions().length > 0 &&
        <h5 className="text-center">Evolutions</h5>
      }

      <div className="row d-flex justify-content-around">
        {evolutionIcons()}
      </div>
    </div>
  )
}
