import React from 'react'

export default function Navigation (props){
  const {working_pokemon, results_per_page, current_page_number} = props.state; 
  const current_display_count = results_per_page < working_pokemon.length ? results_per_page : working_pokemon.length; 
  const max_page_number = Math.ceil(working_pokemon.length / results_per_page);

  const leftArrow = () => {
    return <button 
      type="button" 
      className="btn btn-default" 
      disabled={current_page_number < 2}
      onClick={props.navLeft}
    >
      <i className="fas fa-arrow-left"></i>
    </button>
  }; 
  const rightArrow = () => {
    return <button 
      type="button" 
      className="btn btn-default" 
      onClick={props.navRight}
      disabled={current_page_number >= max_page_number}
      >
        <i className="fas fa-arrow-right"></i>
      </button>
  };

  return (
    <div className="row d-flex justify-content-between mb-2">
      {leftArrow()}
      <div>Page: {current_page_number}/{max_page_number}</div>
      <div>Results: {current_display_count}/{working_pokemon.length}</div>
      {rightArrow()}
    </div>
  )
}
