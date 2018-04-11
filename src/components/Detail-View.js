import React from 'react'
import DetailEvolutions from './Detail-Evolutions';

export default function DetailView (props) {
  const { state } = props; 
  const p = props.pokemon.find(item => item.id === state.detail_pokemon_id);

  return (
    <div>
      <button type="button" className="btn btn-default" onClick={props.showListView}>
        <i className="fas fa-chevron-left"></i> Back to list
      </button>
      <br/>

      <div className="row">
        <div className="col d-flex justify-content-center">

          <div>
            <img className="card-img-top" src={p.img} alt={p.name} />
            <h3 className="text-center">{p.name}</h3>
          </div>

        </div>
      </div>

      <br/>

      <div className="row">
        <div className="col">
          <table className="table table-hover">
            <tbody>
              <tr><td>ID</td><td>{p.num}</td></tr>
              <tr><td>Height</td><td>{p.height}</td></tr>
              <tr><td>Weight</td><td>{p.weight}</td></tr>
              <tr><td>Type</td><td>{p.type}</td></tr>
              <tr><td>Weakness</td><td>{p.weaknesses[0]}</td></tr>
              <tr><td>Candy</td><td>{p.candy}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <DetailEvolutions pokemon={props.pokemon} currentPokemon={p} showPokemonDetails={props.showPokemonDetails}/>
      <button type="button" className="btn btn-default" onClick={props.showListView}>
        <i className="fas fa-chevron-left"></i> Back to list
      </button>
    </div>
  )
}
