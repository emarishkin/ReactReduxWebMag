import type { FC } from "react";
import { Poster } from "../components/Poster";
import styles from '../style/poster.module.css'; 
import { Products } from "../components/Products";
import { useSelector } from "react-redux";
import type { RootState } from "../features/store"
import { Categories } from "../components/Categories";

export const HomePage: FC = () => {

    const products = useSelector((state: RootState) => state.products.list);
    const categories = useSelector((state: RootState) => state.categories.list);


    return (
        <div className={styles.homePage}>
            <Poster />
            <Products products={products} title="Trending Products" />
            <Categories products={categories} title="Top Categories" amount={4}/>
        </div>
    );
};