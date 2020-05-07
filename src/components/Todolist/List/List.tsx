import React from "react";
import styles from './Style.module.css'
import Task from "./Task/Task";
// @ts-ignore
import {TaskType} from "../../App";

type PropsType = {
    tasks: Array<TaskType>
}

export const List = (props: PropsType) => {

    const jsxElements = props.tasks.map((task) => {
        return <Task title={task.title} isDone={task.isDone}/>
    });

    return <div className={styles.list}>
        {jsxElements}
    </div>
}