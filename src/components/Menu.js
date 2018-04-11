import React, { Component } from 'react'

class Menu extends Component {

  render(){
    const { props } = this;
    const { state } = props; 

    return (
      <div className="row mb-1 border-bottom">

         <div className="col-md-6 d-flex align-items-center mb-3 order-md-1 order-2">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Pokemon search..." 
            onChange={props.updateSearchValue}
            value={state.search_value}
            ref="searchInput"
          />
          {state.search_value.length > 0 && 
            <button 
              type="button"   
              className="position-absolute" 
              id="clearInput"
              onClick={props.updateSearchValue}  
            >
              <i className="far fa-times-circle"></i>
            </button>
          }
        </div>
  
        <div className="col-md-3 col-6 d-flex justify-content-center align-items-center mb-3 order-md-2 order-1">
          Results: 
          <select className="ml-2" onChange={props.updateResultsPerPage} value={state.results_per_page}>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </div>
          
        <div className="col-md-3 col-6 d-flex justify-content-center align-items-center mb-3 order-md-2 order-1">
          View: 
          <button 
          type="button" 
          className="toggleViewBtn"
          onClick={props.toggleGrid}
          >
          { state.display_grid ?
              <img src="/svg/th-list.svg" alt="list" /> : 
              <img src="/svg/th-large.svg" alt="grid" />
            }
          </button>
        </div>
  
      </div>
    );
  }
  
};

export default Menu; 
