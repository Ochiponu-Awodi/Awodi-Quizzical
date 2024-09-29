/* eslint-disable */
import './Bubbles.css'

const Bubbles = (props) => {

    return (
        <div
            className={`bubble`}
            style={{
                ...props.positionStyles,
                ...props.styles,
                animationDuration: props.animationDuration,
                animationName: props.animationName,
            }}
        >
            {props.text}
        </div>
    );
};

export default Bubbles;