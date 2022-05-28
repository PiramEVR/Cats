import React, {FC, memo} from 'react';
import like from '../../assets/image/like.svg'
import dontLike from '../../assets/image/dontLike.svg'
import style from './Favorites.module.css'

type PropsType = {
    editFavorite?: (id: string, isFavorite: boolean) => void
    id: string
    isFavorite: boolean
}

export const Favorites: FC<PropsType> = memo(({editFavorite, id, isFavorite}) => {

    return (
        <label>
            <input className={style.checkbox}
                   type={"checkbox"}
                   checked={isFavorite}
                   name={'like'}
                   onChange={() => {
                       editFavorite && editFavorite(id, !isFavorite)
                   }}

            />

            {
                isFavorite ? <img src={like} alt=""/> : <img src={dontLike} alt=""/>
            }
        </label>
    );
});
