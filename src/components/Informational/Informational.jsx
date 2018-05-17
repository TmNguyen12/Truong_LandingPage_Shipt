import React, { Component } from "react";
import InformationalItem from "./Informational_item";
import {information} from "../../util/info_util"; 

import "../../assets/stylesheets/informational.css";

export class Informational extends Component {
  render() {
    return (
      <div className="informational">
        <span className="info-text">
          Everything you love about <br /> Target at your fingertips.
        </span>
        <div className="info-cards">
          {information.map((info, idx) => (
            <InformationalItem key={"info" + `${idx}`} info={info} />
          ))}
        </div>
        <input
          type="submit"
          className="info-start"
          value="GET STARTED"
          onClick={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Informational;
