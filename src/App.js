import React, { Component } from "react";

import CardList from "./components/card-list/card-list.component.jsx";
import { Search } from "./components/search/search.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
    //this.getChangeEvent = this.getChangeEvent.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        this.setState({ monsters: users });
      });
  }

  getChangeEvent = e => {
    this.setState({ searchField: e.target.value }, () => {
      console.log(this.state);
    });
  };

  render() {
    /*const monstersList = this.state.monsters.map(monster => {
      return <h1 key={monster.id}>{monster.name}</h1>;
    });*/
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="container">
        <h1>Monsters Rolodex</h1>
        <div className="row">
          <Search
            placeholder="Search Monster"
            handleChange={this.getChangeEvent}
          />
        </div>
        <div className="row">
          <CardList monsters={filteredMonsters} />
        </div>
      </div>
    );
  }
}

export default App;
