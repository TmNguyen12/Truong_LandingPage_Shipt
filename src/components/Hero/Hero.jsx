/*eslint no-useless-concat: "off"*/

import React, { Component } from "react";
import { getshops } from "../../util/zip_util";
import ErrorMessage from "./Error";
import "../../assets/stylesheets/hero.css";

export class Hero extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      text: "",
      shops: [],
      error: false
    };
  }

  handleKey(e, field) {
    if (e.keyCode === 9 && field === "text") {
      e.preventDefault();
      document.getElementById("search-button").focus();
    } else if (e.keyCode === 13 && this.state.text) {
      this.handleSubmit();
    }
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit() {
    if (this.state.text === "") return null;

    getshops(this.state.text).then(res => {
      let textField = document.getElementById("zip-input-id");
      let exclamation = document.getElementsByClassName("errspan");
      let mapMarker = document.getElementsByClassName("map-marker");

      if (res === "error") {
        exclamation[0].classList.remove("hidden");
        mapMarker[0].classList.add("orange");
        textField.classList.add("error-text");
        this.setState({ error: true });
      } else {
        mapMarker[0].classList.remove("orange");
        exclamation[0].classList.add("hidden");
        textField.classList.remove("error-text");
        this.setState({ error: false });
        return this.props.handleResults(res);
      }
    });
  }

  render() {
    return (
      <div className="hero">
        <div className="hero-text">
          <div className="hero-text-target">Target </div>
          <div className="hero-text-other">exclusive offer.</div>
        </div>
        <h4>
          $49 membership (reg. $99) + $15 credit with qualifying purchase{" "}
          <sup>*</sup>
        </h4>
        <div className="zip-code-handler">
          <div className="zip-input-group">
            <div className="map-marker-parent">
              <i className="fas fa-map-marker-alt map-marker" />
            </div>
            <input
              type="text"
              id="zip-input-id"
              className="zip-input"
              placeholder="Enter ZIP code"
              value={this.state.text}
              onChange={this.update("text")}
              onKeyDown={e => this.handleKey(e, "text")}
            />
            <div className="errspan-parent">
              <span className="fas fa-exclamation-circle errspan hidden" />
            </div>
            <input
              type="submit"
              className="zip-submit"
              value="GET STARTED"
              id="search-button"
              onClick={this.handleSubmit}
            />
          </div>
          <ErrorMessage isError={this.state.error} />
        </div>
        <h6>
          <sup>*</sup>Membership offer valid for new members only. Target order
          of $100 or more must be placed to qualify for $15 credit, which
          expires 30 days after qualifying order is placed and can be applied to
          any order from Shipt.
        </h6>
      </div>
    );
  }
}

export default Hero;
