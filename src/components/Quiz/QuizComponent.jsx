// ./src/stories/Page.js

import React from "react";
import "./quiz.css";
import { Header } from "../Header";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../../../firebase";
import { useState } from "react";
export const QuizComponent = ({ hasHeader, type, questions, candidateId }) => {
  const [user, setUser] = React.useState();
  const [step, setStep] = useState(0);
  const [responses, setResponses] = useState({});
  const [score, setScore] = useState(null);
  const [ca, setCorrectAnswer] = useState(0);
  // const questions = questionsdata.technical["questions"];
  const handleOptionChange = (questionId, option) => {
    const isCorrect =
      questions.find((q) => q.id === questionId).answer === option;
    setResponses({
      ...responses,
      [questionId]: {
        answer: type === "Technical" ? option : option.personality,
        isCorrect: type === "Technical" ? isCorrect : option.personality,
      },
    });
    console.log(responses);
  };

  const handleSubmit = async () => {
    let count = 0;
    let results = {};

    try {
      if (type === "Technical") {
        Object.entries(responses).map(([_, value]) => {
          if (value.isCorrect) {
            return count++;
          }
        });

        const calculatedScore = (count / questions.length) * 100;
        setScore(calculatedScore);
        setCorrectAnswer(count);

        results = {
          responses,
          candidateId,
          correctAnswers: count,
          totalQuestions: questions.length,
          score: calculatedScore,
        };
      } else {
        const prompt = "";
        const personality = await PersonalityAnalysis(prompt);
        results = {
          responses,
          candidateId,
          totalQuestions: questions.length,
          personality,
        };
      }
      await addDoc(collection(firestore, "quizResults"), results);
      alert("Results saved!");
    } catch (error) {
      console.error("Error saving results: ", error);
      alert("Failed to save results.");
    }
  };

  const currentQuestion = questions[step];
  return (
    <article>
      {hasHeader ? (
        <>
          <Header
            user={user}
            onLogin={() => setUser({ name: "Jane Doe" })}
            onLogout={() => setUser(undefined)}
            onCreateAccount={() => setUser({ name: "Jane Doe" })}
          />
        </>
      ) : null}
      <section className="dark:text-white dark:bg-slate-800">
        <div className="container  mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">{type} Assessment</h1>
          <h2 className="text-xl font-bold mb-2">{currentQuestion.question}</h2>
          <form>
            {Object.entries(currentQuestion.options).map(([key, value]) => (
              <div key={key} className="mb-2">
                <input
                  type="radio"
                  id={`${currentQuestion.id}-${key}`}
                  name={`question-${currentQuestion.id}`}
                  value={key}
                  // checked={responses[currentQuestion.id] === key}
                  onChange={() => handleOptionChange(currentQuestion.id, value)}
                  className="mr-2"
                />
                <label htmlFor={`${currentQuestion.id}-${key}`}>
                  {type === "Technical" ? value : value.option}
                </label>
              </div>
            ))}
            <div>
              {step > 0 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-l"
                >
                  Previous
                </button>
              )}
              {step < questions.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
                >
                  Next
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
          {score !== null && (
            <div className="mt-4">
              <p>
                Your score is {score.toFixed(1)}% ({ca} out of{" "}
                {questions.length} correct)
              </p>
            </div>
          )}
        </div>
      </section>
    </article>
  );
};
