import React from 'react'

const Header = () => { 

    const myelement = 'Welcome to 30 days of react'
    const title = 'Getting Started React'
    const subtitle = 'JavaScript Library'
    const name = 'Nikku'
    const date = 'Jul 7, 2023'

    return (
        <>
            <h1>{myelement}</h1>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>
                Author : {name}
            </p>
            <small>
                {date}
            </small>
        </>
    )
 }

const Main = () => { 

    const conditon = 'Prerequisite to get started react.js'

    const WebTech = ['HTML', 'CSS', 'JavaScript']

    return (
        <>
            <p>{conditon}</p>
            <ul>
                {
                    WebTech.map(
                        (techs) => { 
                            return <li>{techs}</li>
                        }
                    )
                }
            </ul>
        </>
    )
}

const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <>
            <p>
                CopyRight&copy;{year} 
            </p>
        </>
    )
}


const Index = () => {
  return (
    <>
        <Header />
        <Main />
        <Footer />
    </>
  )
}

export default Index