import React, { Component } from "react";
//import Radium, { StyleRoot } from "radium";
import classes from "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {
        name: "Mani",
        age: 26,
        id: "abc1"
      },
      {
        name: "Sari",
        age: 27,
        id: "abc2"
      },
      {
        name: "Padhu",
        age: 28,
        id: "abc3"
      }
    ],
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.person[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = personIndex => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doeshow = this.state.showPersons;
    this.setState({ showPersons: !doeshow });
  };

  render() {
    const maniStyle = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
      /*":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }*/
    };
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      maniStyle.backgroundColor = "red";
      maniStyle[":hover"] = {
        backgroundColor: "salmon",
        color: "black"
      };
    }

    const classes = ["red", "bold"].join(" ");

    return (
      /*<StyleRoot>
      <div className="App">*/
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={classes}>This is Really Working!!!</p>
        <button style={maniStyle} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {persons}
      </div>
      /* </StyleRoot>*/
    );
  }
}
//export default Radium(App);
export default App;
