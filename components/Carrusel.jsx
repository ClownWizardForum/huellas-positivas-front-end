"use client"

import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Component1 from '@/components/CarruselComponent1';
import PrevArrowSVG from "@/public/icons/left-arrow.svg";
import NextArrowSVG from "@/public/icons/right-arrow.svg";

import styles from '@/styles/Carrusel.module.scss';



const components = [
  {
    image: 'https://via.placeholder.com/800x400.png?text=Imagen+1',
    text: 'Texto para la primera imagen',
    buttonText: 'Botón 1'
  },
  {
    image: 'https://via.placeholder.com/800x400.png?text=Imagen+2',
    text: 'Texto para la segunda imagen',
    buttonText: 'Botón 2'
  },
  {
    image: 'https://via.placeholder.com/800x400.png?text=Imagen+2',
    text: 'Texto para la segunda imagen',
    buttonText: 'Botón 2'
  },
  {
    image: 'https://via.placeholder.com/800x400.png?text=Imagen+2',
    text: 'Texto para la segunda imagen',
    buttonText: 'Botón 2'
  },
  // ...más componentes
];



const Carousel = () => {
  const sliderRef = useRef(null);

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <a className={className} style={{ ...style, display: "block" }} onClick={() =>handleRightArrow}>
        <NextArrowSVG height="30px" width="30px"/>
      </a>
    );
  }
  
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <a className={className} style={{ ...style, display: "block" }} onClick={() =>handleLeftArrow}>
        <PrevArrowSVG height="30px" width="30px"/>
      </a>
    );
  }
  

  const handleLeftArrow = () => {
    sliderRef.current.slickNext();
    console.log('Siguiente');
  }

  const handleRightArrow = () => {
    sliderRef.current.slickPrev();
    console.log('Anterior');
  }


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // Usa el ref para llamar a los métodos slickNext y slickPrev
    nextArrow: (
      <SampleNextArrow  />
    ),
    prevArrow: (
      <SamplePrevArrow  />
    ),
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider ref={sliderRef} {...settings}>
        {components.map((component, index) => (
          <Component1 key={index} {...component} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;