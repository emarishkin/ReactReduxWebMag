import type { FC } from "react";
import { Link } from "react-router-dom";
import type { ICategory } from "../types/categoryes";
import styles from '../style/categories.module.css';

interface CategoriesProps {
  title: string,
  products: ICategory[],
  amount: number
}

export const Categories: FC<CategoriesProps> = ({ title, products = [], amount }) => {
    const list = products.slice(0, amount);
    
    const getRandomProductCount = () => Math.floor(Math.random() * 50) + 10;

    return (
        <section className={styles.categoriesSection}>
            <h2 className={styles.sectionTitle}>{title}</h2>
            <div className={styles.categoriesGrid}>
                {list.map(({ id, name, image }) => (
                    <Link 
                        key={id} 
                        to={`/categories/${id}`} 
                        className={styles.categoryCard}
                    >
                        <div className={styles.productCount}>
                            {getRandomProductCount()} items
                        </div>
                        
                        <div 
                            className={styles.categoryImage}
                            style={{ backgroundImage: `url(${image})` }}
                        />
                        
                        <div className={styles.categoryContent}>
                            <h3 className={styles.categoryName}>{name}</h3>
                        </div>
                        
                        <div className={styles.hoverArrow}></div>
                    </Link>
                ))}
            </div>
        </section>
    );
};