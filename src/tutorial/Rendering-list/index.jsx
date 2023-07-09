import React from 'react'
import List2 from './index2'

const Title = () => { 
    return <h1>Learn Rendering List React</h1>
}

const Lists = () => { 

    const people = [
        'The Rock',
        'John Cena',
        'Randy Orton',
        'Roman Reigns',
        'Brock Lesnar',
    ]

    let result = (
        people.map((person) => <li>{person}</li>)
    )

    return (
        <>
            <ul>
                {/* {
                    people.map((person) => { 
                        return <li>{person}</li>
                    })
                } */}
                {result}
            </ul>
        </>
    )
 }

const DemoRenderingList = () => {
  return (
    <>
        <Title />
        <Lists />
        <hr />
        <List2 />
    </>
  )
}

export default DemoRenderingList