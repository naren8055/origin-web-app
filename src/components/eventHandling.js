import React from 'react'

function eventHandling() {
    function clickHandler() {
        console.log('Button clicked')
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}
// Note: for class component - just replace onClick={clickHandler} with onClick={this.clickHandler}

export default eventHandling;
