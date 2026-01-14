import type { FC } from "react";
import { Poster } from "../components/Poster";
import styles from '../style/poster.module.css'; 
import { Products } from "../components/Products";
import { useSelector } from "react-redux";
import type { RootState } from "../features/store"

export const HomePage: FC = () => {

    const {list} = useSelector((state:RootState)=>state.products)

    return (
        <div className={styles.homePage}>
            <Poster />
            <Products products={list} title="Trending Products" />
        </div>
    );
};