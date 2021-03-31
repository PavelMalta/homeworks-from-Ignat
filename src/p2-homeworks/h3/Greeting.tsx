import React from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : ""; // need to fix with (?:)

    return (
        <div className={s.item}>
            <div className={s.nameInput}>
                <input value={name} onChange={setNameCallback} className={inputClass}/>
            <button onClick={addUser}>add</button>
                {error && <div className={s.errorMessage}>{error}</div>}
            </div>
            <div className={s.totalUsers}>{totalUsers}</div>
        </div>
    );
}

export default Greeting;
