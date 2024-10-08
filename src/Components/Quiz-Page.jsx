/* eslint-disable */

import React, { useEffect, useState } from 'react';
import './Quiz-Page.css';
import Bubbles from './Bubbles';
import createBubblesData from './bubblesData';
import './Spinner.css';

function QuizPage ({ onFinish }) {
    const [questions, setQuestions] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [loading, setLoading] = useState(true);
    const bubblesData = createBubblesData(true);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch('https://opentdb.com/api.php?amount=5&category=9&type=multiple');
                const data = await response.json();

                const formattedQuestions = data.results.map((item) => ({
                    question: decodeHtml(item.question),
                    answers: [
                        ...item.incorrect_answers.map(answer => decodeHtml(answer)),
                        decodeHtml(item.correct_answer)
                    ].sort(() => Math.random() - 0.5),
                    correctAnswer: decodeHtml(item.correct_answer),
                }));
                setQuestions(formattedQuestions);
            } catch (error) {
                console.error('Error fetching questions:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchQuestions();
    }, []);

    const handleAnswerSelect = (questionIndex, answer) => {
        setSelectedAnswers((prev) => ({
            ...prev,
            [questionIndex]: answer,
        }));
    };

    const handleSubmit = () => {
        const score = questions.reduce((total, question, index) => {
            return total + (selectedAnswers[index] === question.correctAnswer ? 1 : 0);
        }, 0);
        onFinish(score, questions, selectedAnswers);
    };

    const decodeHtml = (html) => {
        const txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    };

    if (loading) {
        return (
            <div className="loading-container">
                <div className='spinner'>Loading questions...</div>
            </div>
        );
    }

    return (
        <div className='container'>
            <div className="quiz-page">
                {questions.map((currentQuestion, index) => (
                    <div key={index} className="question-container">
                        <h2 className='question'>{currentQuestion.question}</h2>
                        <div className="answers">
                            {currentQuestion.answers.map((answer, answerIndex) => (
                                <button
                                    key={answerIndex}
                                    className={`answer-button ${selectedAnswers[index] === answer ? 'selected' : ''}`}
                                    onClick={() => handleAnswerSelect(index, answer)}
                                >
                                    {answer}
                                </button>
                            ))}
                        </div>
                        <hr />
                    </div>
                ))}
            </div>
            <button onClick={handleSubmit} disabled={Object.keys(selectedAnswers).length !== questions.length} className='submit'>
                Submit
            </button>
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
        </div>
    );
};

export default QuizPage;