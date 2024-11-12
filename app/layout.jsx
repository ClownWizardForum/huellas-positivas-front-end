import React from 'react';
import styles from '@/styles/DogsFundation.module.scss';
import Footer from "@/components/Footer"
import Header from '@/components/Header';
import { Inter } from "next/font/google"




const inter = Inter({
    subsets: ["latin"],
})
export default function Page({ children }) {

    return (
        <html lang="en" className={inter.className}>
            <body className={styles.container}>
                <Header />
                <main style={{ margin: '2rem' }}>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}

