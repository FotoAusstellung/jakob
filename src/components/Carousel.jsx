import React, { Component, setState } from "react";
import { ImageField } from "./ImageField";
import { ArrowButton } from "./ArrowButton";
import { Button } from "@material-ui/core"

export class Carousel extends Component {
  state = { Image: 1 };

  constructor(props){
	  super(props);
	  this.nextImage = this.nextImage.bind(this);
	  this.previousImage = this.previousImage.bind(this);
  }
  render() {
    return (
      <div className="carousel" >
        <ImageField image={this.state.Image} />
        <ArrowButton direction={-1} clickfunction={this.previousImage} />
        <ArrowButton direction={1} clickfunction={this.nextImage} />
		<p>{this.state.Image}</p>


      </div>
    );
  }
  nextImage() {
    this.setState(((prevState) => {


	  return { Image: prevState.Image === 54 ? 1 : prevState.Image + 1 };
    }));
  }
  previousImage() {
    this.setState(((prevState) => {

	  return { Image: prevState.Image <= 1 ? 54 : prevState.Image - 1 };
    }));
  }
  
}
