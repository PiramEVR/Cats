import React, {useCallback} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/store";
import style from "../cats/Cats.module.css";
import {Favorites} from "../../common/favorites/Favorites";
import {setFavorite} from "../../store/cats-reducers";
import s from "../../common/Container.module.css";

export const LikedCats = () => {
    const cats = useAppSelector(store => store.cats.cats)
    const dispatch = useAppDispatch()
    const editFavorite = useCallback((id: string, isFavorite: boolean) => {
        dispatch(setFavorite(id, isFavorite))
    }, [dispatch])
    return (
        <div className={s.container}>
            <div className={style.catsPage}>
                {cats.map(cat => {
                    return cat.isFavorite
                        && <div className={style.catsImg} key={cat.id}>
                            <img src={cat.url} width='225' height='225'/>
                            <span className={style.favorites}>
                        <Favorites isFavorite={cat.isFavorite} id={cat.id} editFavorite={editFavorite}/>
                    </span>
                        </div>
                })}
            </div>
        </div>
    );
};


