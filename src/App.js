import React, { Component } from 'react';
import './App.css';

import {PrettyMessage} from "./components/PrettyMessage/msg.component"
import {CustomMessage} from "./components/CustomMessage/custom.component"
import {ListContainer} from "./components/ListContainer/contain.component"

class App extends Component {

  constructor() {
    super();
    this.state =
    {
      people:
        [
          {
            name: "Name 1",
            age: 21
          },

          {
            name: "Name 2",
            age: 19
          },

          {
            name: "Name 3",
            age: 25
          }
        ],

      name: "Deer"
    }
  }



  render() {
    return (
      <div className="App">

        <ListContainer>
          <p>Hello World</p>
          <p>Hello World</p>
          <p>Hello World</p>
          <p>Hello World</p>
        </ListContainer>
        <PrettyMessage/>
        <CustomMessage msg="hello" />



        {
          this.state.people.map(peep =>(
            <p key={peep.age}>{peep.name}</p>
            ))
        }

      </div>
    );
  }
}


export default App;
