import type { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from '../style/sidebar.module.css'; 
import { useSelector } from "react-redux";
import type { RootState } from "../features/store";

export const Sidebar: FC = () => {

     const { list } = useSelector((state: RootState) => state.categories);

    return (
        <section className={styles.sidebar}>
            <div className={styles.container}>
                <div className={styles.title}>Categories</div>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        {list.slice(0,5).map(({id,name})=>(
                            <li key={id}>
                                <NavLink to={`/categories/${id}`}>{name}</NavLink>
                            </li>
                        ))}
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