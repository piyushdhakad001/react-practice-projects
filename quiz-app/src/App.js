import { useState } from "react";
import "./App.css";

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizEnded, setQuizEnded] = useState(false);
  const [result, setResult] = useState({
    correct: 0,
    wrong: 0,
  });

  const objQue = [
    {
      Question: "1. PM of India?",
      option: ["Trump", "Modi", "Putin", "Xee"],
      Answer: "Modi",
    },
    {
      Question: "2. Capital of MP?",
      option: ["Jabalpur", "Indore", "Bhopal", "Gwalior"],
      Answer: "Bhopal",
    },
    {
      Question: "3. National Sport of India?",
      option: ["Cricket", "Hockey", "Kabbadi", "Football"],
      Answer: "Hockey",
    },
    {
      Question: "4. Which sport has highest popularity?",
      option: ["Cricket", "Hockey", "Kabbadi", "Football"],
      Answer: "Football",
    },
    {
      Question: "5. Which sport has highest popularity in India?",
      option: ["Cricket", "Hockey", "Kabbadi", "Football"],
      Answer: "Cricket",
    },
  ];

  const handleStartClick = () => {
    setQuizStarted(true);
  };

  const handleOption = (option) => {
    setSelected(option);

    setUserAnswers((prev) => {
      const updatedAnswers = [...prev];
      updatedAnswers[count] = option;
      return updatedAnswers;
    });
  };

  const handleNextButton = () => {
    if (count < objQue.length - 1) {
      setCount(count + 1);
      setSelected(null);
    } else {
      // Quiz finished
      const finalAnswers = [...userAnswers];

      // Make sure the last selected answer is included
      finalAnswers[count] = selected;

      let correct = 0;
      let wrong = 0;

      objQue.forEach((question, index) => {
        if (question.Answer === finalAnswers[index]) {
          correct++;
        } else {
          wrong++;
        }
      });

      setResult({
        correct: correct,
        wrong: wrong,
      });

      setQuizEnded(true);
    }
  };

  const handlePreviousButton = () => {
    if (count > 0) {
      setCount(count - 1);
      setSelected(userAnswers[count - 1] || null);
    }
  };

  return (
    <>
      <div className="header">
        <h2 className="quiz-name">React Quiz</h2>

        <p className="total-questions">
          Total Questions: {objQue.length}
        </p>
      </div>

      {!quizStarted && (
        <div className="home-page">
          <button
            className="start-button"
            onClick={handleStartClick}
          >
            Start Quiz
          </button>
        </div>
      )}

      {quizStarted && !quizEnded && (
        <>
          <div className="container">
            <div className="question-container">

              <p className="question">
                {objQue[count].Question}
              </p>

              {objQue[count].option.map((option) => (
                <p
                  className={
                    selected === option
                      ? "selected"
                      : "option"
                  }
                  key={option}
                  onClick={() => handleOption(option)}
                >
                  {option}
                </p>
              ))}

              <button
                className="previous"
                onClick={handlePreviousButton}
              >
                Previous
              </button>

              <button
                className="next"
                onClick={handleNextButton}
              >
                Next
              </button>

            </div>
          </div>

          <button className="home-button">
            Home
          </button>
        </>
      )}

      {/* RESULT */}
      {quizEnded && (
        <div className="result">
          <h2>Quiz Completed!</h2>

          <p className="correct">
            Correct: {result.correct}
          </p>

          <p className="wrong">
            Wrong: {result.wrong}
          </p>
        </div>
      )}
    </>
  );
}

export default App;