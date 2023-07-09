import React from 'react'

const Profile = () => {

    const avatar = "data:image/jpeg;base64,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"
    const description = "john cena" 
    
    return (
        <>
            <img 
                src={avatar} 
                alt={description}
                className='john-img'
            />
            <br />
        </>
    )
}

export const Gallery = () => { 
    return (
        <>
            <h1>This is John Cena</h1>
            <Profile />
            <Profile />
            <Profile />
        </>
    )
 }

export default Profile