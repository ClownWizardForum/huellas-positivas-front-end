import React from 'react';

import Carruselll from "@/components/CarruselComponent1";
import Carrusel from '@/components/Carrusel';
import styles from '@/styles/DogsFundation.module.scss'; 


const MainContent = () => {
  return (
    <main className="main-content">
      <Carrusel/>
      
    </main>
  )
}



function App() {
    return (
        <div className="app">

            <MainContent />

        </div>
    );
}

export default App;
