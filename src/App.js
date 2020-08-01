import React, { Component } from 'react';
import "./bootstrap-darkly.css"
import './App.css';


import { ListContainer } from "./components/contain.component"
import { Card } from "./components/card.component"
import { SearchBox } from "./components/searchbox.componenet"
import { Header } from "./components/header.componenet"

class App extends Component {

	constructor() {
		super();
		this.state = {
			people: [],
			searchValue: ""
		}
	}

	

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
			.then(data => this.setState({ people: data }))

	}

	searchNames = (e) => {
		this.setState({ searchValue: e.target.value })
	}


	render() {

		const { people, searchValue } = this.state;
		const filteredPeople = people.filter(person =>
			person.name.toLowerCase().includes(searchValue.toLowerCase())
		)

		return (
			<div className="App">

				<Header>Monster Inc</Header>

				<SearchBox func={this.searchNames}/>


				<ListContainer>{
					filteredPeople.map(p => (
						<Card key={p.id} person={p} />
					))
				}
				</ListContainer>

			</div>
		);
	}
}


export default App;
