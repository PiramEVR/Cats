import {catsAPI, CatsType} from "../api/api";
import {AppThunk} from "./store";

const initialState = {
    cats: [] as CatsType[],
    currentPage: 1,
    fetching: true,
}
type InitialStateType = typeof initialState

export const catsReducer = (state: InitialStateType = initialState, action: CatsReducerActionType): InitialStateType => {
    switch (action.type) {
        case 'SET-CATS':
            const newCats = action.cats.map(cat => {
                const isFavorite = false
                return {...cat, isFavorite}
            })
            return {...state, cats: [...state.cats, ...newCats]}
        case 'SET-FETCHING':
            return {...state, fetching: action.fetching}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-FAVORITE':
            return {
                ...state, cats: [
                    ...state.cats
                        .map(cat => cat.id === action.id ? {...cat, isFavorite: action.isFavorite} : cat)
                ]
            }

        default:
            return state
    }
}

const setCats = (cats: CatsType[]) => {
    return {
        type: 'SET-CATS',
        cats
    } as const
}

export const setFetching = (fetching: boolean) => {
    return {
        type: 'SET-FETCHING',
        fetching
    } as const
}

const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}

export const setFavorite = (id: string, isFavorite: boolean) => {
    return {
        type: 'SET-FAVORITE',
        id,
        isFavorite
    } as const
}

export const getCats = (): AppThunk => async (dispatch, getState) => {
    const currentPage = getState().cats.currentPage
    try {
        const res = await catsAPI.getCats(currentPage)
        dispatch(setCats(res.data))
        dispatch(setCurrentPage(currentPage + 1))
    } catch (e) {
        console.error(e)
    } finally {
        dispatch(setFetching(false))
    }
}

export type CatsReducerActionType =
    | ReturnType<typeof setCats>
    | ReturnType<typeof setFetching>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setFavorite>