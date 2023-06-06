import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import { ITask } from './interfaces/Task';

function App() {
    const [taskList, setTaskList] = useState<ITask[]>([]);

    return (
        <div>
            <Header />
            <main className={styles.main}>
                <div>
                    <h2>O que você vai fazer?</h2>
                    <TaskForm
                        btnText='Criar Tarefa'
                        taskList={taskList}
                        setTaskList={setTaskList}
                    />
                </div>
                <div>
                    <h2>Suas tarefas</h2>
                    <TaskList />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
