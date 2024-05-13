import React from 'react';


import styles from '@/styles/DogsFundation.module.scss';
import Carousell from '@/components/Carousel';


export default function Page() {
  return (
    <><title>Huellas Positivas</title>

      <main className="app">

        <div className="card">
          <Carousell />
        </div>

      </main>
    </>

  );
}

