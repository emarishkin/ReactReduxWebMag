import type { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../utils/routes";
import LOGO from '../images/ab6983350d4ff6432911148c165ed829757d967d.png';
import STAFF from '../images/Vector.png';
import VK from '../images/vk-logo-icon-vk-app-transparent-background-free-png.webp';
import TG from '../images/еп.png';
import styles from '../style/footer.module.css';

export const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <Link to={ROUTES.HOME} className={styles.logoLink}>
                        <img src={LOGO} alt="logo" className={styles.logo} />
                        <img src={STAFF} alt="shop name" className={styles.logoText} />
                    </Link>
                </div>
                
                <div className={styles.rights}>
                    <a 
                        href="https://github.com/Marik" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.developerLink}
                    >
                        Developed by Marik
                    </a>
                </div>
                
                <div className={styles.socials}>
                    <a 
                        href="https://vk.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.socialLink}
                    >
                        <img src={VK} alt="VK" className={styles.socialIcon} />
                    </a>
                    <a 
                        href="https://t.me" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.socialLink}
                    >
                        <img src={TG} alt="Telegram" className={styles.socialIcon} />
                    </a>
                </div>
            </div>
        </footer>
    );
};