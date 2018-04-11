import React, { Component } from 'react';

// components
import Header from './Header';
import List from './List-View';
import DetailView from './Detail-View';

// pokemon data 
import { pokemon } from '../data/pokedex.json';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      detail_view: false,
      detail_pokemon_id: 1
    }
  }

  showPokemonDetails = (id) => this.setState({detail_view: true, detail_pokemon_id: id});
  showListView = () => this.setState({ detail_view: false });
  getView = () => {
    if (this.state.detail_view) {
      return <DetailView 
        pokemon={pokemon} 
        state={this.state} 
        showListView={this.showListView} 
        showPokemonDetails={this.showPokemonDetails}
      />
    } else {
      return <List 
        pokemon={pokemon} 
        showPokemonDetails={this.showPokemonDetails} 
      /> 
    }
  }

  render() {
    return (
      <div className="">
        <Header />
        {this.getView()}
      </div>
    );
  }
}

export default App;
