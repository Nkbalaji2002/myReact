import React from 'react'

const Title = <h2>Fitering arrays of items</h2>

const people = [
    {
        id: 0,
        name: 'John Cena',
        description: '16X World Champion',
        profession: 'Mathematician,'
    },
    {
        id: 1,
        name: 'Roman Reigns',
        description: '1000+ days champion',
        profession: 'Chemist',
    },
    {
        id: 2,
        name: 'The Rock',
        description: 'The People Champion',
        profession: 'physicist',
    },
]

const chemists = people.filter((person) => {
    person.profession === 'Chemist'
})


const listItems = chemists.map((person) => { 
    <li>
        <b>{person.name}</b>
    </li>    
})

const List2 = () => {

    return (
        <>
            {Title}
            <ul>
                {listItems}
            </ul>
        </>
    )
}

export default List2