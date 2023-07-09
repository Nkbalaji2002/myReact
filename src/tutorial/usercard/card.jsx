import React from 'react'

export const Card = ({name, info, image}) => {
    return (
        <>
            <div className="user-card">
                <img src={image} alt="this is my logo" className="profile-picture" />
                <h2 className="name">{name}</h2>
                <p className="contact-info">{info}</p>
            </div>
        </>
    )
}