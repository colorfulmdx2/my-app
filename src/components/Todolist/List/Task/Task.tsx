import React from 'react';
import styles from './Task.module.css'


type PropsType = {
    title: string
    isDone: boolean
}
const Task = (props: PropsType) => {

    const css = props.isDone ? styles.done : '';

    return (
        <div className={styles.task + ' ' + css}>
            <div className={styles.task}>
                <input type='checkbox' checked={props.isDone}/>
                <span>{props.title}</span>
            </div>
        </div>
    )
}


export default Task