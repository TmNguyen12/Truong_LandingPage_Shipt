import React, { Component } from "react";
import ResultsItem from "./ResultsItem";
import "../../assets/stylesheets/results.css";

export class Results extends Component {
  render() {
    if (!this.props.resulted) {
      return null;
    }
    return (
      <div className="results">
        <h2>DELIVERING FROM:</h2>
        <div className="results-items">
          {this.props.shopResults.map(shop => (
            <ResultsItem key={shop.name} shop={shop} />
          ))}
        </div>
        <input
          type="submit"
          className="result-button"
          value="GET STARTED"
          onClick={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Results;
