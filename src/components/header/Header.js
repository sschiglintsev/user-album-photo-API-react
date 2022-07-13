import React from 'react'
import { NavLink } from "react-router-dom";
import {PATH} from "../../routes/Routes";
import style from "./Header.module.css"

export const Header = () => {

    return (
        <div className={style.header}>
            <div >User-Album-Photo-API</div>
            <div>
                <NavLink to={PATH.MAIN}>
                    Main
                </NavLink>
            </div>

        </div>
    )
}
