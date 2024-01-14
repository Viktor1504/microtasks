import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';

export type FilterValuesType = 'all' | 'active' | 'completed';

type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

type TaskStateType = {
    [key: string]: TaskType[]
}

function App() {

    let todolistID1 = crypto.randomUUID();
    let todolistID2 = crypto.randomUUID();

    let [todolists, setTodolists] = useState<TodolistsType[]>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState<TaskStateType>({
        [todolistID1]: [
            {id: crypto.randomUUID(), title: 'HTML&CSS', isDone: true},
            {id: crypto.randomUUID(), title: 'JS', isDone: true},
            {id: crypto.randomUUID(), title: 'ReactJS', isDone: false},
            {id: crypto.randomUUID(), title: 'Rest API', isDone: false},
            {id: crypto.randomUUID(), title: 'GraphQL', isDone: false},
        ],
        [todolistID2]: [
            {id: crypto.randomUUID(), title: 'HTML&CSS2', isDone: true},
            {id: crypto.randomUUID(), title: 'JS2', isDone: true},
            {id: crypto.randomUUID(), title: 'ReactJS2', isDone: false},
            {id: crypto.randomUUID(), title: 'Rest API2', isDone: false},
            {id: crypto.randomUUID(), title: 'GraphQL2', isDone: false},
        ]
    });


    function removeTask(todolistID: string, taskId: string) {
        setTasks({...tasks, [todolistID]: [...tasks[todolistID].filter(t => t.id != taskId)]})
    }

    function addTask(todolistID: string, title: string) {
        const newTask = {id: crypto.randomUUID(), title: title, isDone: false};
        setTasks({...tasks, [todolistID]: [newTask, ...tasks[todolistID]]})
    }

    function changeStatus(todolistID: string, taskId: string, isDone: boolean) {
        setTasks({...tasks, [todolistID]: tasks[todolistID].map(t => t.id === taskId ? {...t, isDone} : t)})
    }

    function changeFilter(todolistID: string, value: FilterValuesType) {
        setTodolists(todolists.map(t => t.id === todolistID ? {...t, filter: value} : t))
    }

    function deleteTodo(todolistID: string) {
        setTodolists(todolists.filter(t => t.id !== todolistID))
        delete tasks[todolistID]
    }

    return (

        <div className="App">
            {todolists.map(todo => {
                let tasksForTodolist = tasks[todo.id];

                if (todo.filter === 'active') {
                    tasksForTodolist = tasks[todo.id].filter(t => t.isDone === false);
                }
                if (todo.filter === 'completed') {
                    tasksForTodolist = tasks[todo.id].filter(t => t.isDone === true);
                }
                return (
                    <Todolist
                        key={todo.id}
                        todolistID={todo.id}
                        title="What to learn"
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={todo.filter}
                        deleteTodo={deleteTodo}
                    />
                )
            })}

        </div>
    );
}

export default App;
