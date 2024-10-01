/* eslint-disable */
import './Bubbles.css'

const Bubbles = ({ text, positionStyles, styles, animationDuration, animationName }) => {
    return (
        <div
            className="bubble"
            style={{
                ...positionStyles,
                ...styles,
                animationDuration,
                animationName,
            }}
        >
            {text}
        </div>
    );
};

export default Bubbles;