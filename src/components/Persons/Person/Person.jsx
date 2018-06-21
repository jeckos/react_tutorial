import React,{ Component } from 'react';
import classes from './Person.css'

class Person extends Component{
    constructor(props) {
        super(props)
        console.log('[Person.js] Inside Constructor', props)
    }
    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()')
    }
    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()')
    }

    render () {
        console.log('[Person.js] Inside render()')
        return (
            <div className={classes.Person}>
                <h2 onClick={this.props.click}>Name: {this.props.name}</h2>
                <p>Age: {this.props.age}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>)
    }
}

export default Person;
