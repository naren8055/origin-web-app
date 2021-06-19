import React, { Component } from 'react'

export class counter extends Component {
    constructor() {
        super();
        this.state = {
            count : 0
        }
    }
    increment () {
        this.setState({
            count: this.state.count + 1
        }, 
        () => {
            console.log('Callback value', this.state.count)
            }
        )
    }
    increment_from_prev_state() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        })
        )
    }
    increment_three(){
        this.increment_from_prev_state();
        this.increment_from_prev_state();
        this.increment_from_prev_state();
    }
    render() {
        return (
            <div>
                <button onClick={() => this.increment()}>Count +1</button>
                <button onClick={() => this.increment_three()}>Count +3</button>
                <p> {this.state.count} </p>
            </div>
        )
    }
}

export default counter;
