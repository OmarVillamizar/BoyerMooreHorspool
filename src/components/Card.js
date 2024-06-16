import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import './Card.css'; // Asegúrate de tener estilos básicos para tu card

const Card = ({ title, description, image, onClick }) => {
    const props = useSpring({
        from: { opacity: 0, transform: 'translateY(50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 500 },
    });

    return (
        <animated.div style={props} className="card" onClick={onClick}>
            <img src={image} alt={title} className="imageCard" />
            <h3>{title}</h3>
            <p>{description}</p>
        </animated.div>
    );
};

export default Card;
