import React, { Component } from 'react';
import './App.css';

import {ListContainer} from "./components/ListContainer/contain.component"
import {Card} from "./components/Card/card.component"

class App extends Component {

  constructor() {
    super();
    this.state = {
      people:[]
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => this.setState({people:data}))

  }


  render() {
    return (
      <div className="App">

        <ListContainer>
        {
          this.state.people.map(p =>(
            <Card key={p.id}  person={p}/>
            ))
        }
        </ListContainer>

      </div>
    );
  }
}


export default App;
