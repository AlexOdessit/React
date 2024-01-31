import React, { Component } from 'react';
import styles from '../Slider/Slider.module.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Card from '../Card';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }

  nextSlide = () => {
    const { currentSlide } = this.state;
    const slides = this.props.data || [];

    this.setState({
      currentSlide: currentSlide === slides.length - 1 ? 0 : currentSlide + 1,
    });
  };

  prevSlide = () => {
    const { currentSlide } = this.state;
    const slides = this.props.data || [];
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
        <button onClick={this.prevSlide}>
          <IoIosArrowBack size='30px' />
        </button>
        <button onClick={this.nextSlide}>
          <IoIosArrowForward size='30px' />
        </button>
      </div>
    );
  }
}

export default Slider;
