import type { FC } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../utils/routes";
import styles from '../style/sidebar.module.css'; 

export const Sidebar: FC = () => {
    return (
        <section className={styles.sidebar}>
            <div className={styles.container}>
                <div className={styles.title}>Categories</div>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <NavLink 
                                to={ROUTES.CATEGORIES} 
                                className={({ isActive }) => 
                                    `${styles.navLink} ${isActive ? styles.active : ''}`
                                }
                            >
                                LINK
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={styles.helpSection}>
                    <div className={styles.helpLinks}>
                        <a href="/help" target="_blank" rel="noopener noreferrer" className={styles.helpLink}>
                            Help
                        </a>
                        <a href="/terms" target="_blank" rel="noopener noreferrer" className={styles.helpLink}>
                            Terms & Conditions
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};