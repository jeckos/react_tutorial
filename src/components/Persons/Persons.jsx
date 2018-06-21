import React, { Component } from 'react'

import Person from './Person/Person'

class Persons extends Component {
    constructor(props) {
        super(props)
        console.log('[Persons.jsx] Inside Constructor', props)
    }
    componentWillMount() {
        console.log('[Persons.jsx] Inside componentWillMount()')
    }
    componentDidMount() {
        console.log('[Persons.jsx] Inside componentDidMount()')
    }
    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.jsx] Inside componentWillReceiveProps()', nextProps)
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.jsx] Inside shouldComponenUpdate()', nextProps, nextState)
        return nextProps.persons !== this.props.persons;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.jsx] Inside componentWillUpdate()', nextProps, nextState)
    }
    componentDidUpdate() {
        console.log('[UPDATE Persons.jsx] Inside componentWillUpdate()')
    }

    render () {
        console.log('[Persons.jsx] Inside render()')
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)}
                    click={() => this.props.clicked(index)}
                />)
        });
    }
}

export default Persons;