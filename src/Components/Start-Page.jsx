import './Start-Page.css'
import Bubbles from './Bubbles'
import bubblesData from './bubblesData'


function StartPage () {
    return (
        <>
            <div className="start-page">
                <h1>Quizzical</h1>
                <button className="start-button">Start Quiz</button>
            </div>
            {bubblesData.map((bubble) => (
                <Bubbles 
                    key={bubble.id} 
                    text={bubble.styles.text}
                    styles={bubble.styles}
                    positionStyles={bubble.positionStyles}
                    animationName={bubble.animationName}
                    animationDuration={bubble.animationDuration}
                />
            ))}
        </>
    )
}

export default StartPage