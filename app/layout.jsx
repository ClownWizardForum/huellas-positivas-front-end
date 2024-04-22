import React from 'react';
import styles from '@/styles/DogsFundation.module.scss'; 
import Footer from "@/components/Footer"
import Header from '@/components/Header';

export default function Page({ children }) {

    return (
        <div className={styles.container}>
            <Header />
            <main style={{ margin: '2rem'}}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

