import React, { Component } from 'react';
import styles from '../Slider/Slider.module.css';
import Card from '../Card';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }

  dataFromSlides = () => {
    return this.props.data;
  };

  nextSlide = () => {
    const { currentSlide } = this.state;
    const slides = this.dataFromSlides();

    this.setState({
      currentSlide: currentSlide === slides.length - 1 ? 0 : currentSlide + 1,
    });
  };

  prevSlide = () => {
    const { currentSlide } = this.state;
    const slides = this.dataFromSlides();
    this.setState({
      currentSlide: currentSlide === 0 ? slides.length - 1 : currentSlide - 1,
    });
  };

  render() {
    const { currentSlide } = this.state;
    const { data: slides, isLoading, isError } = this.props;
    const currentProduct = slides.length > 0 ? slides[currentSlide] : null;

    return (
      <div className={styles.wrap}>
        <Card data={currentProduct} isLoading={isLoading} isError={isError} />
        <button onClick={this.prevSlide}>Prev</button>
        <button onClick={this.nextSlide}>Next</button>
      </div>
    );
  }
}

export default Slider;
