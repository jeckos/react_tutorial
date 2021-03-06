import React, {Component} from 'react';
import classes from './App.css';

import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'


class App extends Component {
    constructor(props) {
        super(props)
        console.log('[App.js] Inside Constructor', props)
        this.state = {
            persons: [
                {id: 'sdas1', name: 'Eugene', age: 22},
                {id: 'sdfs2', name: 'Max', age: 25},
                {id: 'sdadaqs3', name: 'Stefan', age: 20, children: 'My Hobbies: Programing'},
            ],
            showPersons: false
        }
    }
    componentWillMount() {
        console.log('[App.js] Inside componentWillMount()')
    }
    componentDidMount() {
        console.log('[App.js] Inside componentDidMount()')
    }
    // state = {
    //     persons: [
    //         {id: 'sdas1', name: 'Eugene', age: 22},
    //         {id: 'sdfs2', name: 'Max', age: 25},
    //         {id: 'sdadaqs3', name: 'Stefan', age: 20, children: 'My Hobbies: Programing'},
    //     ],
    //     showPersons: false
    // };

    deletePerson = (index) => {
        // const  persons = this.state.persons;
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({persons: persons})
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons]
        persons[personIndex] = person

        this.setState({
            persons: persons
        })
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    };


    render() {
        console.log('[App.js] Inside render()')
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>

                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePerson}
                        changed={this.nameChangedHandler}
                    />
                </div>
            )
        } else {
            persons = null

        }
        return (
            <div className={classes.App}>
                <Cockpit
                    appTitle={this.props.title}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}
                />
                {persons}
            </div>
        );


    }
}

export default App;
