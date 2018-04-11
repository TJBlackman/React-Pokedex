import React, { Component } from 'react'

// components
import Menu from './Menu';
import TableRow from './Table-Row';
import GridItem from './Grid-Item';
import Navigation from './List-Results';

class List extends Component {
  constructor(props){
    super(props);
    this.state =  {
      results_per_page: 10,
      current_page_number: 1,
      total_pages: null,
      all_pokemon: this.props.pokemon,
      working_pokemon: this.props.pokemon,
      search_value: "",
      display_grid: false
    };
  }

  calculateMaxPage = () => Math.ceil(this.state.working_pokemon.length / this.state.results_per_page);

  updateNumberResults = (number) => this.setState({ results_per_page: number }); 
  
  updateSearchValue = (e) => {
    const value = e.target.value || ""; 
    this.setState({ search_value: value, current_page_number: 1 }, () => {
      this.updateWorkingPokemon(); 
    });
  }

  updateResultsPerPage = (e) => {
    this.setState({ results_per_page: e.target.value }, () => {

    })
  }

  navLeft = () => { 
    const {current_page_number} = this.state; 
    if (current_page_number > 1){
      this.setState({ current_page_number: current_page_number - 1 });
    }
  }

  navRight = () => { 
    const {current_page_number} = this.state;
    if (current_page_number < this.calculateMaxPage()){
      this.setState({ current_page_number: current_page_number + 1 });
    }
  }

  toggleGrid = () => this.setState({ display_grid: !this.state.display_grid });

  updateWorkingPokemon = () => {
    const {search_value, all_pokemon} = this.state; 
    const new_working_pokemon = all_pokemon.filter(item => {
      return item.name.toLowerCase().includes(search_value.toLowerCase())
    });
    this.setState({working_pokemon: new_working_pokemon});
  }

  sliceOfWorkingPokemon = () => {
    const {working_pokemon, results_per_page, current_page_number } = this.state; 
    if (current_page_number > this.calculateMaxPage()){ this.setState({ current_page_number: this.calculateMaxPage() }) }
    const start = (current_page_number - 1) * results_per_page;
    const end = start + results_per_page; 
    return [ ...working_pokemon.slice(start, end) ]; 
  }

  showTableRows = () => {
    return (
        <table className="table table-hover"> 
          <tbody>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Type</th>
            </tr>
            {this.state.working_pokemon.length ? 
              this.sliceOfWorkingPokemon().map(item => 
                <TableRow key={item.id} pokemon={item} showPokemonDetails={this.props.showPokemonDetails}/>) :
              <tr><td colspan="3" className="text-center">No matching pokemon :(</td></tr>
            }
          </tbody>
        </table>
    );
  }

  showGrid = () => {
    return (
      <div className="row">
        {this.state.working_pokemon.length ? 
          this.sliceOfWorkingPokemon().map(item => 
              <GridItem key={item.id} pokemon={item} showPokemonDetails={this.props.showPokemonDetails}/>) :
            <div className="col text-center">No matching pokemon :(</div>
        }
      </div>
    )
  }

  


  render(){
    return (
      <div>
        <Menu 
          updateResultsPerPage={this.updateResultsPerPage} 
          updateSearchValue={this.updateSearchValue}
          toggleGrid={this.toggleGrid}
          state={this.state}
        />
        <Navigation 
          state={this.state}
          navLeft={this.navLeft}  
          navRight={this.navRight}  
        />
        {this.state.display_grid ? this.showGrid() : this.showTableRows()}
      </div>
    )
  }
}

export default List;