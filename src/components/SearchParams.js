import React, { Component } from "react";
import loadData from "../utils/loadData";

class SearchParams extends Component {
  state = {
    question: "test",
    answer: null
  };

  // async componentDidMount() {
  //   this.getAnswer();
  // }

  handleSubmit = async e => {
    e.preventDefault();
    const { question } = this.state;
    const url = `https://8ball.delegator.com/magic/JSON/${question}`;
    const answerData = await loadData(url);

    console.log("this is the answer:", answerData);
    const answer = answerData;

    this.setState({
      answer: answer
    });
    console.log(this.state);
  };

  handleChange = e => {
    console.log(e.target);
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  // let params = encodeURIComponent("Is today going to be a good day?");
  // let uri = "https://8ball.delegator.com/magic/JSON/" + params;
  // fetch(uri)
  //   .then(response => response.json())
  //   .then(json => {
  //     console.log(json);
  //   });

  render() {
    const { question, answer } = this.state;
    const response = answer ? answer.magic.answer : null;
    const inquiry = answer ? answer.magic.question : null;
    return (
      <div className="search-params">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="question">
            What is your question for the magic eight ball?
            <input
              name="question"
              type="text"
              value={question}
              placeholder="question"
              onChange={this.handleChange}
            ></input>
          </label>
          <button type="submit">Submit</button>
        </form>
        <p>
          {inquiry} {response}
        </p>
      </div>
    );
  }
}

export default SearchParams;
