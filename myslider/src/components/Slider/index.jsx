import React, { useState, useEffect } from 'react';
import styles from '../Slider/Slider.module.scss';
import classNames from 'classnames';
import { getCards } from '../../api';
import { useLoader } from '../../hooks';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Card from '../Card';

const Slider = () => {
  const { data, isLoading, isError } = useLoader(getCards);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = data;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const slideAnimation = classNames(styles.slideAnimation);

    if (slideAnimation) {
      slideAnimation.style.transition = 'transform 0.6s ease-in-out';
      slideAnimation.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  const currentProduct = slides.length > 0 ? slides[currentSlide] : null;
  const loaded = !isLoading;

  return (
    <section className={styles.section}>
      <div className={styles.sliderContainer}>
        <div className={styles.slideAnimation}>
          <Card data={currentProduct} isLoading={isLoading} isError={isError} />
        </div>

        {loaded && (
          <div className={styles.slideNav}>
            <IoIosArrowBack className={styles.btn} onClick={prevSlide} />
            <IoIosArrowForward className={styles.btn} onClick={nextSlide} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Slider;
