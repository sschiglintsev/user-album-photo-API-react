import React from 'react'
import { Route, Routes} from "react-router-dom";
import {Main} from "../components/main/Main";
import {User} from "../components/user/User";


export const PATH = {
    MAIN: '/',
    USER: '/user',
}

export const RoutesPage = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={PATH.USER}>
                    <Route path=":albumId" element={<User/>}/>
                </Route>
            </Routes>
        </div>
    )
}