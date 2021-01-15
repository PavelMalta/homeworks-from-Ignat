import React from "react";
import s from "./Message.module.css"

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
            <div className={s.box2}><img src={props.avatar}/></div>

            <div className={s.box3}>
                <div className={s.box4}>
                    <div className={s.name}>
                        {props.name}
                    </div>
                    <div className={s.textMessage}>
                        {props.message}
                    </div>
                </div>
                <div className={s.box5}>
                    {props.time}
                </div>
            </div>

        </div>
    );
}

export default Message;
