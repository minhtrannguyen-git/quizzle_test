import React from "react";
import Answer from "./Answer";
import he from "he";

export default function Question(props) {
  const [choice, setChoice] = React.useState({ choice: "" });
  function handleChange(e) {
    setChoice({
      choice: e.target.value,
    });
  }

  
  let allAnswers = [];
  for (let i = 0; i < props.answers.length; i++){
    allAnswers.push(<Answer isTrue={props.answers[i].isTrue} checkResult={props.checkResult} key={`${i}_${props.id}`} id={`${i}_${props.id}`} name={`name_${String(props.id)}`} givenValue={props.answers[i].answer} value={choice.choice} handleChange={handleChange}/>)
  }
  return (
    <div className="question--section">
      <div className="question" > {he.decode(props.question)}</div>
      <div className="answers">
        {allAnswers}
      </div>
    </div>
  );
}
