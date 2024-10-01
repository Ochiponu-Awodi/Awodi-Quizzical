/* eslint-disable */
import './Start-Page.css'
import Bubbles from './Bubbles'
import createBubblesData from './bubblesData'


function StartPage ({ onStartQuiz }) {
    const bubblesData = createBubblesData(false);

    return (
        <>
            <div className="start-page">
                <h1>Quizzical</h1>
                <button className="start-button" onClick={onStartQuiz}>Start Quiz</button>
            </div>
            {bubblesData.map((bubble) => (
                <Bubbles 
                    key={bubble.id} 
                    styles={bubble.styles}
                    positionStyles={bubble.positionStyles}
                    text={bubble.styles.text}
                    animationName={bubble.animationName}
                    animationDuration={bubble.animationDuration}
                />
            ))}
        </>
    )
}

export default StartPage