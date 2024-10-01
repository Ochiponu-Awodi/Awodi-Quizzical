/* eslint-disable */

import StartPage from './Components/Start-Page'
import { useState } from 'react'
import QuizPage from './Components/Quiz-Page'

function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
    const [finalScore, setFinalScore] = useState(null);

    const handleStartQuiz = () => {
        setIsQuizStarted(true);
    };

    const handleFinishQuiz = (score) => {
        setFinalScore(score);
        setIsQuizStarted(false);
    };
  
  return (
    <>
        {!isQuizStarted ? (
            <StartPage onStartQuiz={handleStartQuiz} />
        ) : (
            <QuizPage onFinish={handleFinishQuiz} />
        )}
    </>
  )
}

export default App
