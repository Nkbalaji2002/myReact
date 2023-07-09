import React from 'react'
import Profile from '../component'

const Title = () => <h1>John Cena's Achievements.</h1>

export const Achievements = () => {
    return (
        <ul>
            <li>He is 16 time world Champion</li>
            <li>He is one of the GOAT in WWE.</li>
            <li>He did achieve the guiness world record.</li>
        </ul>
    )
}

const TodoList = () => {
  return (
    <>
        <Title />
        <Profile />
        <Achievements />
    </>
  )
}

export default TodoList