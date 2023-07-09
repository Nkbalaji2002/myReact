import React from 'react'
import Book from './components/Book'
import './index.css'
import Book2 from './components/Book2'
import { books } from './components/data/books'

// inline styling
const myStyle = {
  textAlign: 'center',
  marginTop: '2rem',
  textTransform: 'uppercase'
}


const BookList = () => {
  return (
    <>
        <h1 style={myStyle}>Sample BookList</h1>
        <div className="booklist">
            <Book />
            <Book />
            <Book />
        </div>
        <hr />
        <h1 style={myStyle}>Amazon Best Sellers</h1>
        <div className="booklist">
            {
              books.map((book) => {
                return <Book2 {...book} key={book.id} />
              })
            }
        </div>
    </>
  )
}

export default BookList