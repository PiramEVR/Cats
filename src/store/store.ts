import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';


const rootReducer = combineReducers({

})
export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppActionsType = any
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export const useAppDispatch = () => {
    return useDispatch() as ThunkDispatch<AppRootStateType, unknown, AppActionsType>
}


export type AppRootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store
