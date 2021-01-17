import React from "react";
import {AffairType} from "./HW2";
import s from "./Affairs.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    };// need to fix

    let color = s.status
    if (props.affair.priority === "high") {
        color = s.high
    } else if (props.affair.priority === "middle") {
        color = s.middle
    } else if (props.affair.priority === "low") {
        color = s.low
    }

    return (
        <div className={s.item}>
            <div className={s.affair}>{props.affair.name}</div>
            <div className={color}>{props.affair.priority}</div>
            <div className={s.button}>
                <button onClick={deleteCallback}>X</button>
            </div>
        </div>
    );
}

export default Affair;


