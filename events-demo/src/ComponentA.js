import React,  { useEffect, useState }  from 'react'
import emitter from './events'

function A() {
    const [data, setData] = useState()
    useEffect(() => {
        emitter.addListener("call me", (data)=>(
            setData(data)
        ))
    }, [])

    return(
        <div>
            hello, {data}
        </div>
    )
}

export default A