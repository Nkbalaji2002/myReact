import React from 'react'

const title = 'Rich Dad Poor Dad'
const AuthorName = 'Robert T.Kiyoski'
const image = 'https://m.media-amazon.com/images/I/81BE7eeKzAL._AC_UY218_.jpg'

const Book = () => {
    return (
        <>
            <div className="book">
                <Image />
                <Title />
                <Author />
            </div>            
        </>
    )
}


const Image = () => {
    return (
        <>
            <img 
                src={image}
                alt={title} 
            />
            
        </>
    )
}

const Title = () => {
    return (
        <>
            <h2>
                {title}
            </h2>
        </>
    )
}

const Author = () => {
    return (
        <>
            <h4>
                {AuthorName.toUpperCase()}
            </h4>
        </>
    )
}

export default Book