// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const Card = ({ actor }) => {
    // eslint-disable-next-line react/prop-types
    const { name } = actor
    return (
        <div>
            <ul>
                <li>{name}</li>
            </ul>
        </div>
    );
};

export default Card;