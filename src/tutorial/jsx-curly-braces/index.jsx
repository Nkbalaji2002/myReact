import React from 'react'
import Profile from '../component'
import { Achievements } from '../jsx/todolist'

const Title = () => {

    const person = {
        name : 'John Cena',
        theme : {
            background: 'black',
            color: 'yellow',
            fontFamily: 'sans-serif',
            padding: '20px',
        }
    }

    const name = 'John Cena'

    return (
        <h1 style={person.theme}>
            {person.name}'s To do List
        </h1>
    )
}

const Avatar = () => {
  return (
    <>
        <Title />
        <Profile />
        <Achievements />
    </>
  )
}

export default Avatar