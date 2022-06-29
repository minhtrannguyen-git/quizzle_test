import React, { useEffect } from "react";
import Question from "./Question";

export default function Game() {
  const [data, setData] = React.useState([]);
  const [checkResult, setCheckResult] = React.useState(false);
  const [playTime, setPlayTime] = React.useState(1);
  const [score, setScore] = React.useState(0);

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=15&type=multiple")
      .then((res) => res.json())
      .then((apiData) => {
        let neededFields = [];
        for (let {
          question,
          correct_answer,
          incorrect_answers,
        } of apiData.results) {
          neededFields.push({
            question: question,
            correct_answer: correct_answer,
            incorrect_answers: incorrect_answers,
          });
        }
        // data refining
        let refinedData = [];
        let id = 0;
        for (let item of neededFields) {
          let answers = [];
          answers.push({
            answer: item.correct_answer,
            isTrue: true,
          });
          for (let wrong_answer of item.incorrect_answers) {
            answers.push({
              answer: wrong_answer,
              isTrue: false,
            });
          }

          // shuffle answers
          let maxCount = Math.floor(Math.random() * 20);
          for (let count = 0; count < maxCount; count++) {
            // each question has exactly 4 answer
            let firstRandIndex = Math.floor(Math.random() * 4);
            let secRandIndex = Math.floor(Math.random() * 4);
            [answers[firstRandIndex], answers[secRandIndex]] = [
              answers[secRandIndex],
              answers[firstRandIndex],
            ];
          }

          refinedData.push({
            id: id,
            question: item.question,
            answers: answers,
          });
          id++;
        }
        console.log(refinedData);
        setData(refinedData);
      });
  }, [playTime]);

  function changeCheckingStatus() {
    setCheckResult(true);
  }

  function increaseScore() {
    setScore(score+1);
  }

  function resetGame() {
    setCheckResult(false);
    setPlayTime(playTime + 1);
    setScore(0);
    console.log("You have played: ",playTime, " times.")
  }

   


  let allQuestions = data.map((question) => (
    <Question
      increaseScore={increaseScore}
      checkResult={checkResult}
      key={question.id}
      {...question}
    />
  ));

  return (
    <div className="game">
      {allQuestions}
      {!checkResult ? (
        <button className="game--btn" onClick={changeCheckingStatus}>Check result</button>
      ) : (
        <>
          {/* <div className="result">Your score: {score} / 5</div> */}
          <button className="game--btn" onClick={resetGame}>Reset</button>
        </>
      )}
    </div>
  );
}
