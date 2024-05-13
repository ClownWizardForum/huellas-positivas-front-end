// components/Carousel.jsx
"use client";
import React, { useState } from "react";
import styles from "@/styles/Carousel.module.scss";
import Image from "next/image";
import rightArrow from "@/public/icons/right-arrow.svg";
import leftArrow from "@/public/icons/left-arrow.svg";

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { id: 1, title: "Slide 1", description: "Description for Slide 1" },
        { id: 2, title: "Slide 2", description: "Description for Slide 2" },
        { id: 3, title: "Slide 3", description: "Description for Slide 3" },
        { id: 4, title: "Slide 4", description: "Description for Slide 4" },
        { id: 5, title: "Slide 5", description: "Description for Slide 5" },
    ];

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

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.arrow} onClick={prevSlide}>
                <Image src={leftArrow} alt="Left Arrow" width={30} height={30} />
            </div>
            <div className={styles.slide}>
                <div className={styles.card}>
                    <h1>{slides[currentSlide].title}</h1>
                    <h3>{slides[currentSlide].description}</h3>
                </div>
            </div>
            <rightArrow className={styles.arrow} onClick={nextSlide}>
                <Image src={rightArrow} alt="Right Arrow" width={30} height={30} />
            </rightArrow>
        </div>
    );
};

export default Carousel;
