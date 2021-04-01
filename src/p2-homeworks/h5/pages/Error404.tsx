import React from 'react'
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.error}>
            <div className={s.area}>404</div>
            <div className={`${s.area} ${s.description}`}>Page not found!</div>
        </div>
    )
}

export default Error404
