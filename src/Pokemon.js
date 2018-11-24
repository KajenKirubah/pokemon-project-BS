import React, { Component } from 'react'

export default class Pokemon extends Component {
    state = {

        movesList:[]

    }

    componentDidMount() {
        const { movesURL } = this.props.pokemon;

        let movesFetch = movesURL.map(url => { fetch(url)});
        Promise.all(movesFetch)
        .then(responseArray => 
            Promise.all(responseArray.map(resp => resp.json()) ))
        .then(dataArray => {
            this.setState({
                movesList: dataArray,
            })
        })
    }



  render() {
    return (
      <div>
        
      </div>
    )
  }
}
