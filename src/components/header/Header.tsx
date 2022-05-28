import React from 'react';
import style from './Header.module.css'
import {NavLink} from "react-router-dom";
import s from '../../common/Container.module.css'

export const Header = () => {
    return (
        <div className={style.header}>
            <div className={s.container}>
                <nav className={style.nav}>
                    <NavLink className={navData => navData.isActive ? style.active : style.item} to='/'>
                        Все котики
                    </NavLink>
                    <NavLink className={navData => navData.isActive ? style.active : style.item} to='/liked-cats'>
                        Любимые котики
                    </NavLink>
                </nav>
            </div>
        </div>
    );
};

