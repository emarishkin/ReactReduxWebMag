import type { FC } from "react";
import style from '../style/header.module.css';
import { Link } from "react-router-dom";
import { ROUTES } from "../utils/routes";
import LOGO from '../images/ab6983350d4ff6432911148c165ed829757d967d.png';
import STAFF from '../images/Vector.png';
import AVATAR from '../images/Group.png';
import LUPA from '../images/5036916221558965373 1.svg';
import HEART from '../images/17079954331574330926 1.svg';
import BASKET from '../images/16051444861606988091 1.svg';

export const Header:FC = () => {
    return (
        <header className={style.header}>
            <div className={style.container}>
                <Link to={ROUTES.HOME} className={style.logoContainer}>
                   <img src={LOGO} alt="logo" className={style.logo} />
                   <img src={STAFF} alt="shop name" className={style.logoText} />
                </Link>
                
                <div className={style.mainSection}>
                    <div className={style.userSection}>
                        <img src={AVATAR} alt="avatar" className={style.avatar} />
                        <p className={style.userName}>Guest</p>
                    </div>
                    
                    <form className={style.searchForm}>
                        <div className={style.searchWrapper}>
                            <div className={style.searchIconContainer}>
                                <img src={LUPA} alt="search" className={style.searchIcon} />
                            </div>
                            <input 
                                type="search" 
                                name="search" 
                                placeholder="поиск...." 
                                autoComplete="off" 
                                onChange={()=>{}} 
                                value='' 
                                className={style.searchInput}
                            />
                        </div>
                        
                        
                        {/* <div className={style.searchResults}>
                            результаты поиска
                        </div> */}
                    </form>

                    <div className={style.accountSection}>
                        <Link to={ROUTES.HOME} className={style.accountLink}>
                            <img src={HEART} alt="favorites" className={style.accountIcon} />
                        </Link>

                        <Link to={ROUTES.HOME} className={`${style.accountLink} ${style.basketLink}`}>
                            <img src={BASKET} alt="basket" className={style.accountIcon} />
                            <span className={style.countBadge}>2</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}