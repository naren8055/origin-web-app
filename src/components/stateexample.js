import React, {Component} from 'react';

class StateExample extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Click the below button to change text'
        }
    }
    changeText() {
        this.setState({
            message: 'Text Changed successfully!'
        })
    }
    render() {
        return (
            <div>
                <h1> {this.state.message} </h1>
                <button onClick = {() => this.changeText()}> Click Here! </button>
            </div>
        );
    }
}

export default StateExample;