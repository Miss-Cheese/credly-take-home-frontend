import React, { useState, useEffect } from 'react';

function HeroList(props) {
    

    return (
        <div className='hero-list'>
            {props.users.map((user) => (
                <div className='hero-card'>
                    <p>{user.name}</p>
                    <p>{user.occupation}</p>
                    <img alt="hero" src={user.image_url}/>
                    <button>Give a badge!</button>
                </div>
            ))}
        </div>
    )
    
}

export default HeroList