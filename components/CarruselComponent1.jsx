import React from 'react';
import '@/styles/CarouselComponent1.module.scss'; // Asegúrate de que la ruta al archivo SCSS es correcta

function CarouselComponent1({ imageUrl, title, description, buttonText }) {
  return (
    <div className="carousel-component-1">
      <div className="image-container" style={{ backgroundImage: `url(${imageUrl})` }}>
        {/* La imagen se aplicará como fondo */}
      </div>
      <div className="content-container">
        <h2>{title}</h2>
        <p>{description}</p>
        <button><a href="/animals">{buttonText}</a></button>

      </div>
    </div>
  );
}

export default CarouselComponent1;