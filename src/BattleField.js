import React, { Component } from 'react';
import Pokemon from './Pokemon';

let baseURL = 'https://pokeapi.co/api/v2'
export default class BattleField extends Component {

    state = {

    }

    randomInd = (max) => {
        return Math.floor(Math.random() * max) + 1;
    }

    componentDidMount() {

        let firstFetch = fetch(`${baseURL}/pokemon/${this.randomInd(800)}`);
        firstFetch.then(response => response.json())
        .then(data => {
            this.setState({
                pokemon1: {
                    isTurn: true,
                    name: data.name,
                    hp: data.stats[5].base_stat,
                    atk: data.stats[4].base_stat,
                    def: data.stats[3].base_stat,
                    sprite: data.sprites.back_default,
                    movesURL: [data.moves[this.randomInd(data.moves.length -1)].move.url, data.moves[this.randomInd(data.moves.length -1)].move.url, data.moves[this.randomInd(data.moves.length -1)].move.url]
                }
            })
        })
        
        let secondFetch = fetch(`${baseURL}/pokemon/${this.randomInd(800)}`);
        secondFetch.then(response => response.json())
        .then(data => {
            this.setState({
                pokemon2: {
                    isTurn: false,
                    name: data.name,
                    hp: data.stats[5].base_stat,
                    atk: data.stats[4].base_stat,
                    def: data.stats[3].base_stat,
                    sprite: data.sprites.back_default,
                    moves: [data.moves[this.randomInd(data.moves.length -1)].move.url, data.moves[this.randomInd(data.moves.length -1)].move.url, data.moves[this.randomInd(data.moves.length -1)].move.url]

                }
            })
        })
    }

    componentDidUpdate() {
        //for later, if a pokemons health reaches 0, need to fetch another pokemon
    }

    attack = () => {
        //when one pokemon attacks, need to change turns to the other pokemon
        //changing turns means to disable the moveslist

    }



  render() {

    if(isTurn) {
        console.log('something');
    }
    return (
      <div className='battleField'>
          <div className='battleField-pokemons'>
            {this.state.pokemon1 ? <Pokemon pokemon={this.state.pokemon1} /> : null }
            {this.state.pokemon2 ? <Pokemon pokemon={this.state.pokemon2} /> : null }
          </div>

        
      </div>
    )
  }
}
