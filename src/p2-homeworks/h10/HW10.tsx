import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from './bll/store';
import {loadingAC} from "./bll/loadingReducer";
import preloader from "./bll/preloader/Ajux_loader.gif"
import s from "./HW8.module.css"

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType>((state) => state.loading.loading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true)) // dispatch
        setTimeout(() => dispatch(loadingAC(false)), 2000)  // setTimeout
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div className={s.preloader}>
                        <img src={preloader}/>
                    </div>
                ) : (
                <div className={s.button}>
                <SuperButton onClick={setLoading}>set loading...</SuperButton>
                </div>
                )
                }

                <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
                <hr/>
                </div>
                )
            }

            export default HW10
