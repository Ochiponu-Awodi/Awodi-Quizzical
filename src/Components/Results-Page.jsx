/* eslint-disable */

import './Results-Page.css'
import Bubbles from './Bubbles';
import createBubblesData from './bubblesData';

function ResultPage({ questions, selectedAnswers, score, onRestart }) {
    const bubblesData = createBubblesData(true);

    return (
        <div className='container'>
        <div className="result-page">
            <h2>Your Score: {score}</h2>
            {questions.map((question, index) => (
                <div key={index} className="question-result">
                    <h3>{question.question}</h3>
                    {question.answers.map((answer, answerIndex) => {
                        const isCorrect = answer === question.correctAnswer;
                        const isSelected = answer === selectedAnswers[index];
                        const className = isSelected
                            ? isCorrect
                                ? 'correct'
                                : 'incorrect'
                            : isCorrect
                                ? 'correct'
                                : '';

                        return (
                            <div key={answerIndex} className={`answer ${className}`}>
                                {answer}
                            </div>
                        );
                    })}
                    <hr />
                </div>
            ))}
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
            <button onClick={onRestart} className='restart'>Retake Quiz</button>
        </div>
    );
}

export default ResultPage;