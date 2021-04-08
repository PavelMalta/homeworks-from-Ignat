import React from 'react'
import { NavLink } from 'react-router-dom'
import {PATH} from "./Routes";
import s from"./Header.module.css"
function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={s.page} activeClassName={s.active}>Pre-Junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={s.page} activeClassName={s.active}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={s.page} activeClassName={s.active}>Junior-Plus</NavLink>
            <div className={s.menu}>menu</div>
        </div>
    )
}

export default Header
