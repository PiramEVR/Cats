import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {catsReducer, CatsReducerActionType} from "./cats-reducers";


const rootReducer = combineReducers({
    cats: catsReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppActionsType = CatsReducerActionType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export const useAppDispatch = () => {
    return useDispatch() as ThunkDispatch<AppRootStateType, unknown, AppActionsType>
}


export type AppRootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store
