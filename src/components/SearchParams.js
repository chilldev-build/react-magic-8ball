import React, { useState } from "react";
import loadData from "../utils/loadData";

var questionList = [];

const SearchParams = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(question);
    const params = encodeURIComponent(question);
    const url = `https://8ball.delegator.com/magic/JSON/${params}`;
    const answerData = await loadData(url);

    console.log("this is the answer:", answerData);
    setAnswer([...answer, answerData.magic]);
    setQuestion("");
    questionList.push(answerData);
    console.log("answer state is: ", answer);
  };

  return (
    <div className="search-params">
      <form onSubmit={handleSubmit}>
        <label htmlFor="question">
          What is your question for the magic eight ball?
          <input
            required
            name="question"
            type="text"
            value={question}
            placeholder="question"
            onChange={e => setQuestion(e.target.value)}
          ></input>
        </label>
        <button type="submit">Submit</button>
      </form>
      <ul>
        {answer.map(answerA => (
          <li key={answerA.question}>
            {answerA.question}? {answerA.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchParams;
