import React from 'react';

import HeaderLogo from "@/public/icons/headerLogo.svg";
import styles from '@/styles/Header.module.scss';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <HeaderLogo width="100px" height="100px" />
                    <h1 className={styles.title}>Huellas Positivas</h1>
                </div>
                <nav className={styles.nav}>
                    <ul className={styles.menu}>
                        {/* ... tus <li> */}
                    </ul>
                </nav>
                <div className={styles.searchBox}>
                    <input type="search" placeholder="Buscar" className={styles.searchInput} />
                </div>
            </div>
        </header>
    );
}

export default Header;
