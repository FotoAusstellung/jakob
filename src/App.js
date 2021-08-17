import React, { Component } from "react";
import "./App.css";
import {Carousel} from "./components/Carousel"


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
	
        </header>

			<Carousel />
			<p>Bilder von: <a href="mailto:arnold.jakob@outlook.de">Jakob Arnold</a></p>
      </div>
    );
  }
}




export default App;
