import React from 'react';
import styles from '@/styles/Footer.module.scss';

function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.copy}>Copyright © 2023 My Website</p>
        </footer>
    );
}

export default Footer;