import type { FC } from "react";
import BG from '../images/vecteezy_modern-gaming-pc-isolated-on-transparent_48412785.png';
import styles from '../style/poster.module.css';

export const Poster: FC = () => {
    return (
        <section className={styles.poster}>
            <div className={styles.glowEffect}></div>
            <div className={styles.cornerDecorations}></div>
            
            <div className={styles.container}>
                <div className={styles.textContent}>
                    <div className={styles.discountBadge}>
                        BIG SALE 20%
                    </div>
                    <div className={styles.subtitle}>
                        the bestseller of 2026
                    </div>
                    <h1 className={styles.title}>
                        LENNON <span className={styles.highlight}>r2d2</span>
                    </h1>
                    <button className={styles.shopButton}>
                        shop now
                    </button>
                </div>             
                <div className={styles.imageContainer}>
                    <img 
                        src={BG} 
                        alt="игровой пк" 
                        className={styles.image}
                    />
                </div>
            </div>
        </section>
    );
};