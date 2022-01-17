import React, { useState, useEffect } from 'react';
import BadgesModal from './badgesModal';

function HeroList(props) {

    const [badgesModal, setBadgesModal] = useState(false)

    const handleClick = (user) => {
        setBadgesModal(true)
        props.setHero(user)
    }

    return (
        <>
        <div className='hero-list'>
            {props.users.map((user) => (
                <div key={user.id} className='hero-card'>
                    <p className='hero-name'>{user.name}</p>
                    <p>{user.occupation}</p>
                    <img alt="hero" src={user.image_url}/>
                    <button onClick={() => handleClick(user)}>Recognize Their Efforts!</button>
                </div>
            ))}
        </div>
        {badgesModal && <BadgesModal badgesModal={badgesModal} setBadgesModal={setBadgesModal} badges={props.badges} issueBadge={props.issueBadge}/>}
        </>
    )
}

export default HeroList