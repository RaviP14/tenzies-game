import React from 'react';

export default function Die(props) {
    const held = props.isHeld ? "held" : ""
    return (
        <div className={`Die ${held}`}>
            <h2 className="DieNumber">{props.value}</h2>
        </div>
    )
}