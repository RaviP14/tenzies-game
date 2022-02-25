import React from 'react';

export default function Die(props) {
    
    return (
        <div className="Die">
            <h2 className="DieNumber">{props.value}</h2>
        </div>
    )
}