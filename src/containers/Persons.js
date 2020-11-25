import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

class Persons extends Component {
  state = {
    persons: [],
  };

  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.addPersonHandler} />
        {this.props.storedPersons.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.deletePersonHandler(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    storedPersons: state.persons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPersonHandler: (name, age) => dispatch({ type: actionTypes.ADD, payload: {name: name, age: age} }),
    deletePersonHandler: (personId) =>
      dispatch({ type: actionTypes.DELETE, personId: personId }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
