/* eslint-disable */

import React, { useState } from 'react';
import StartPage from './Components/Start-Page';
import QuizPage from './Components/Quiz-Page';
import ResultPage from './Components/Results-Page';

function App() {
    const [isQuizStarted, setIsQuizStarted] = useState(false);
    const [finalScore, setFinalScore] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});

    const handleStartQuiz = () => {
        setIsQuizStarted(true);
        setFinalScore(null);
        setSelectedAnswers({});
    };

    const handleFinishQuiz = (score, questions, selectedAnswers) => {
        setFinalScore(score);
        setQuestions(questions);
        setSelectedAnswers(selectedAnswers);
        setIsQuizStarted(false);
    };

    const handleRestartQuiz = () => {
        setIsQuizStarted(true);
        setFinalScore(null);
        setSelectedAnswers({});
    };

    return (
        <>
            {finalScore === null ? (
                !isQuizStarted ? (
                    <StartPage onStartQuiz={handleStartQuiz} />
                ) : (
                    <QuizPage onFinish={handleFinishQuiz} />
                )
            ) : (
                <ResultPage
                    score={finalScore}
                    questions={questions}
                    selectedAnswers={selectedAnswers}
                    onRestart={handleRestartQuiz}
                />
            )}
        </>
    );
}

export default App;