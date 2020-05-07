import React from 'react';
import styles from './App.module.css';
import {Todolist} from "./components/Todolist/Todolist/Todolist";
import {v1} from "uuid";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

function App() {


    let tasks0: Array<TaskType> = [
        {id: v1(), title: 'CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'React', isDone: false},
    ]
    let tasks1: Array<TaskType> = [
        {id: v1(), title: 'Hello', isDone: true},
        {id: v1(), title: 'kitties', isDone: true},
        {id: v1(), title: 'Meow', isDone: false},
    ]
    let tasks2: Array<TaskType> = [
        {id: v1(), title: 'Woof', isDone: true},
        {id: v1(), title: 'dog', isDone: true},
        {id: v1(), title: 'Angry', isDone: false},
    ]

    return (
        <div className={styles.App}>
            <Todolist tasks={tasks0}/>
            <Todolist tasks={tasks1}/>
            <Todolist tasks={tasks2}/>

        </div>
    );
}

export default App;
