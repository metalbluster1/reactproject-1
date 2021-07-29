import React from 'react'
import ReactDOM from 'react-dom'

function Example() {
    return (
        <div>
            <h1>This is our amazing app!!</h1>
            <p>javaScript React</p>
        </div>
    )
}
ReactDOM.render(<Example />, document.querySelector("#root"))