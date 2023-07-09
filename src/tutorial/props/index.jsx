import React from 'react'

const Avatar = ({person, size}) => { 

    // ({person, size}) == (props)

    // {person, size} -> destructing

    // const person = props.person;
    // const size = props.size;

    return (
        <>
            {/* <img 
                className='avatar'
                src="https://i.imgur.com/1bX5QH6.jpg" 
                alt="Lin Lanying"
                height={100}
                width={100} 
            /> */}
            <img
                className='avatar' 
                src={person.imageURL} 
                alt={person.name} 
                height={size}
                width={size}
            />
        </>
    )
 }

const Car = ({brand}) => { 
    return (
        <h1>
            I'm a {brand}!
        </h1>
    )
 }

const DemoProps = () => {
  return (
    <>
        <h1>Learn React Props</h1>
        {/* <Avatar /> */}
        {/* pass props to the child component */}
        <Avatar
            person={{
                name: 'Lin Lanyang',
                imageURL: 'https://i.imgur.com/1bX5QH6.jpg'
            }}
            size={150}
        />
        <Avatar
            person={{
                name: 'Katsuko Saruhashi',
                imageURL: 'https://i.imgur.com/YfeOqp2.jpg'
            }}
            size={100}
        />
        <Avatar
            person={{
                name: 'Katsuko Saruhashi',
                imageURL: 'https://i.imgur.com/oK567lh.jpg'
            }}
            size={50}
        />
        <br />
        <Car
            brand='Audi'
        />
    </>
  )
}

export default DemoProps