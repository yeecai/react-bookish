import React from 'react'
import emitter from './events'
function B() {
    const cb =(data) => {
        emitter.emit("call me", data)
    }
    return(
        <div>
           <button onClick= { () => cb("hey") }></button>
        </div>
    )
}

export default B