import React from "react";
import styles from './Style.module.css'

type PropsType = {
    placeholder: string
}

const Input = (props: PropsType) => {
    return (
        <input placeholder={props.placeholder} />
    )
}

export default Input;