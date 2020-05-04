import {Header} from "../header/Header";
import {List} from "../list/List";
import {Footer} from "../footer/Footer";
import React from "react";
import styles from './style.module.css'


export function TodoList() {
    return (
        <div className={styles.todolist}>
            <Header/>
            <List/>
            <Footer/>   `
        </div>
    )
}