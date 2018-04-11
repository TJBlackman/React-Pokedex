import React from 'react'

export default function GridItem(props){
  const { img, name, id } = props.pokemon;
  return (
    <div 
      onClick={() => {props.showPokemonDetails(id)}}
      className="col-lg-3 col-md-4 col-6 d-flex justify-content-center align-items-end flex-wrap mb-2 grid-icon"
    >
      <img src={img} alt={name} className="d-block img-fluid"/>
      <p className="align-self-end"><b>{name}</b></p>
    </div>
  )
}
