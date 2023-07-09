import React from 'react'

const Title = () => {
    return <h1>Learn React Conditional Rendering</h1>
}

// conditionally returning JSX
const Item = ({name, isPacked}) => {
    // return (
    //     <li>{name}</li>
    // )
    // if (isPacked) {
    //     return <li>{name} 👍</li>
    //     // return null
    // } 
    // return <li>{name}</li>

    // ternary operator ->  ? :

    const result = (isPacked === true) ? <li>{name} 👍</li> : null
    return result
}

const DemoCondition = () => {
  return (
    <>
      <Title />  
      <ul>
        <Item
            isPacked={true}
            name='This is John Cena'
        />
        <Item
            isPacked={true}
            name='This is The Rock'
        />
        <Item
            isPacked={false}
            name='This is Roman Reigns'
        />
      </ul>
    </>
  )
}

export default DemoCondition