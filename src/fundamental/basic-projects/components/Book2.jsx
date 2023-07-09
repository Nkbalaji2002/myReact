import React from 'react'

const Book2 = (props) => {

  const {image, title, author} = props;

  return (
    <>
        <div className="book">
           <img 
              src={`${image}`}
              alt={title} 
            />
           <h2>{title}</h2>
           <h4>{author.toUpperCase()}</h4>
        </div>
    </>
  )
}

export default Book2