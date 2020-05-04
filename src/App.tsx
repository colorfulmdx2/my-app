import React from 'react';
import styles from './App.module.css';
import {TodoList} from "./components/Todolist/to-do-list/TodoList";


function App() {
    return (
        <div className={styles.App}>
            <TodoList/>
            <TodoList/>
            <TodoList/>

        </div>
    );
}

export default App;
