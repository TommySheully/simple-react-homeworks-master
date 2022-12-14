import React from 'react'
import {AffairType} from "./HW2";
import affairs from "./Affairs";
import s from './HW2.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType, // need to fix any
    deleteAffairCallback: (affairId: number) => void, // need to fix any
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
        console.log(props.affair._id)
    }// need to fix

    return (
        <div className={s.Affair}>
            {props.affair.name}
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
