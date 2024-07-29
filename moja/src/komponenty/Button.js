import React, { useState } from 'react';
import './Button.css';

const Button = ({ text, style }) => {
    const [message, setMessage] = useState('');

    const handleClick = () => {
        setMessage('Super, udało się!');
    };

    return (
        <div class="center-text">
            <button className="custom-button" onClick={handleClick} style={style}>
                {text} Kliknij mnie ale co dalej po próbie na githuba
            </button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Button;
