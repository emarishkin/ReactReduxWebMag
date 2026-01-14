import type { FC } from "react";
import { Poster } from "../components/Poster";
import styles from '../style/poster.module.css'; 

export const HomePage: FC = () => {
    return (
        <div className={styles.homePage}>
            <Poster />
        </div>
    );
};