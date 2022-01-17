import React from 'react';

function BadgesModal(props) {

    console.log(props.badges)

    const handleClick = () => {
        props.setBadgesModal(false)
    }

    const handleBadgeSubmit = (badge) => {
        debugger
        console.log(badge)
    }

    return (
        <div className='badges-modal'>
            <button onClick={() => handleClick()} className='close-button'>x</button>
            {props.badges.map((badge) => (
                <div key={badge.id} className='hero-card'>
                    <p className='badge-name'>{badge.name}</p>
                    <img alt="badge" src={badge.image_url} width={150}/>
                    <button onClick={() => handleBadgeSubmit(badge)}>Award This Badge</button>
                </div>
            ))}
        </div>
    )
}

export default BadgesModal