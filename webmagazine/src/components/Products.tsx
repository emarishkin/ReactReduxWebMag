import type { FC } from "react";
import { Link } from "react-router-dom";
import type { IProduct } from "../types/product";
import styles from '../style/products.module.css'; 

interface ProductsProps {
    title: string
    products: IProduct[]
}

export const Products: FC<ProductsProps> = ({ title, products }) => {
    if (!products || products.length === 0) {
        return (
            <section className={styles.productsSection}>
                {title && <h1 className={styles.sectionTitle}>{title}</h1>}
                <p style={{ color: '#94a3b8', textAlign: 'center' }}>No products available</p>
            </section>
        );
    }

    return (
        <section className={styles.productsSection}>
            {title && <h2 className={styles.sectionTitle}>{title}</h2>}
            
            <div className={styles.productsGrid}>
                {products.map((product) => {
                    const { id, title, price, images } = product;
                    const categories = product.categories || { name: "Uncategorized" };
                    const cat = categories.name || "Uncategorized";
                    
                    const isPopular = Math.random() > 0.7;
                    
                    return (
                        <Link key={id} to={`/product/${id}`} className={styles.productCard}>
                            {isPopular && (
                                <div className={styles.popularBadge}>🔥 Popular</div>
                            )}
            
                            <div className={styles.productImage}>
                                {images?.[0] ? (
                                    <img src={images[0]} alt={title} />
                                ) : (
                                    <div className={styles.imagePlaceholder}>No Image</div>
                                )}
                            </div>
                            
                            <div className={styles.productInfo}>
                                <h3 className={styles.productTitle}>{title}</h3>
                                <div className={styles.productCategory}>{cat}</div>
                                
                                <div className={styles.productDetails}>
                                    <div className={styles.prices}>
                                        <div className={styles.price}>${price}</div>
                                        <div className={styles.oldPrice}>
                                            ${Math.floor(price * 1.3)}
                                        </div>
                                    </div>
                                    
                                    <div className={styles.purchases}>
                                        {Math.floor(Math.random() * 20 + 1)} sold
                                    </div>
                                </div>
                            </div>
                            
                            <div className={styles.hoverInfo}>
                                <button className={styles.addToCartBtn}>
                                    Add to Cart
                                </button>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};