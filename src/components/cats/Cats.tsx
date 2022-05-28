import React, { ReactNode, useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getCats, setFavorite, setFetching } from "../../store/cats-reducers";
import style from './Cats.module.css'
import s from '../../common/Container.module.css'
import { Favorites } from "../../common/favorites/Favorites";

type HTMLElementEvent<T extends HTMLElement> = Event & {
    target: T;
}

export const Cats = () => {
    const cats = useAppSelector(store => store.cats.cats)
    const fetching = useAppSelector(store => store.cats.fetching)
    const currentPage = useAppSelector(store => store.cats.currentPage)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (fetching) {
            dispatch(getCats())
        }
    }, [fetching])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    const scrollHandler = (e: HTMLElementEvent<any>) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            dispatch(setFetching(true))
        }
    }
    const editFavorite = useCallback((id: string, isFavorite: boolean) => {
        dispatch(setFavorite(id, isFavorite))
    }, [dispatch])

    return (
        <div className={s.container}>
            <div className={style.center}>
                <div className={style.catsPage}>
                    {cats.map((cat, index) => <div className={style.catsImg} key={cat.id + index}>
                        <img src={cat.url} width='225' height='225' />
                        <span className={style.favorites}>
                            <Favorites isFavorite={cat.isFavorite} id={cat.id} editFavorite={editFavorite} />
                        </span>
                    </div>)}
                    {fetching && < span className={style.loading}>... загружаем еще котиков ...</span>}
                </div>
            </div>
        </div>
    );
};
