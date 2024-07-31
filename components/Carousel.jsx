
"use client";

import { redirect, useRouter } from "next/navigation";
import styles from "@/styles/Carousel.module.scss";
import Image from "next/image";
import RightArrow from "@/public/icons/right-arrow.svg";
import LeftArrow from "@/public/icons/left-arrow.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Link from "next/link";


const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <a className={className} style={{ ...style, display: "block" }} onClick={onClick}>
            <RightArrow height="30px" width="30px" />
        </a>
    );
}

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <a className={className} style={{ ...style, display: "block" }} onClick={onClick}>
            <LeftArrow height="30px" width="30px" />
        </a>
    );
}

function Carousel() {
    const router = useRouter();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    const slides = [
        {
            imgSrc: "/images/slide1.jpg",
            title: "Fundación Huellas",
            description: "Nuestra misión es cuidar a los animales y proporcionarles un ambiente seguro y acogedor. Con tu ayuda, podemos continuar salvando vidas y brindando esperanza a muchos más.",
            buttonTitle: "Más Información",
            redirect: "/"
        },
        {
            imgSrc: "/images/slide2.jpg",
            title: "Adopta un Amigo",
            description: "Ayúdanos a encontrar un hogar para cada animal. La adopción es un acto de amor que salva vidas y ofrece una segunda oportunidad a los animales rescatados.",
            buttonTitle: "Adoptar Ahora",
            redirect: "/adoptions"
        },
        {
            imgSrc: "/images/slide3.jpg",
            title: "Voluntariado",
            description: "Únete a nuestro equipo de voluntarios y haz la diferencia. Tu tiempo y esfuerzo pueden ayudar a mejorar la vida de los animales y contribuir a su bienestar.",
            buttonTitle: "Únete",
            // redirect: "/volunteering"
            redirect: "/"

        },
        {
            imgSrc: "/images/slide4.jpg",
            title: "Donaciones",
            description: "Tu ayuda es crucial para nosotros. Las donaciones nos permiten seguir adelante con nuestro trabajo y brindar los cuidados necesarios a los animales rescatados.",
            buttonTitle: "Donar",
            // redirect: "/donations"
            redirect: "https://biolibre.co/funhuellaspositivas"
        },
        {
            imgSrc: "/images/slide5.jpg",
            title: "Educación",
            description: "Promovemos la educación sobre el cuidado animal y la importancia de tratar a los animales con respeto y compasión. Únete a nosotros en nuestras campañas educativas.",
            buttonTitle: "Aprende Más",
            // redirect: "/education"
            redirect: "/"
        }
    ];

    return (
        <div className={styles.sliderContainer}>
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.cardContent}>
                            <h3>{slide.title}</h3>
                            <p>{slide.description}</p>
                            <Link href={slide.redirect}>

                                <button>{slide.buttonTitle}</button>
                            </Link>
                        </div>
                        <div className={styles.cardImage}>
                            <Image src={slide.imgSrc} alt={slide.title} width={800} height={450} />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Carousel;
