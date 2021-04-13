import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearTimeout(timerId)// stop
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
           setDate(new Date())  // setDate
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)// show
    }
    const onMouseLeave = () => {
        setShow(false)// close
    }
    let hours = date.getHours() >= 10 ? date.getHours() : '0' + date.getHours()
    let minutes = date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes()
    let seconds = date.getSeconds() >= 10 ? date.getSeconds() : '0' + date.getSeconds()

    let dates = date.getDate() >= 10 ? date.getDate() : '0' + date.getDate()
    let months = date.getMonth() >= 10 ? date.getMonth() : '0' + date.getMonth()

    const stringTime = date.toLocaleTimeString() ; // fix with date
    const stringDate = date.toLocaleDateString() // fix with date

    return (
        <div className={s.clockContainer}>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show ? (
                <div>
                    {stringDate}
                </div>
            ) : (
                <br/>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
