import React, { Component } from "react";
import "../src/assets/stylesheets/reset.css";
import "../src/assets/stylesheets/App.css";

import Promo from "./components/Footer-Header/Promo";
import Footer from "./components/Footer-Header/Footer";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import Informational from "./components/Informational/Informational";
import Results from "./components/Results/Results";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopResults: [],
      resulted: false
    };
  }

  handleResults = dataFromChild => {
    if (dataFromChild) {
      this.setState({
        shopResults: dataFromChild,
        resulted: true
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Promo />
        <Navigation />
        <Hero handleResults={this.handleResults} />
        <Results
          resulted={this.state.resulted}
          shopResults={this.state.shopResults}
        />
        <Informational />
        <Footer />
      </div>
    );
  }
}

export default App;
