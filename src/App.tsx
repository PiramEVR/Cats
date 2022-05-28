import React from 'react';
import {Route, Routes} from 'react-router-dom';
import style from './App.module.css';
import {Cats} from "./components/cats/Cats";
import {Header} from "./components/header/Header";
import {LikedCats} from "./components/liked-cats/LikedCats";

function App() {


    return (
        <div className={style.app}>
            <Header/>
            <Routes>
                <Route path={'/Cats'} element={<Cats/>}/>
                <Route path={'/liked-cats'} element={<LikedCats/>}/>
            </Routes>
        </div>
    );
}

export default App;
