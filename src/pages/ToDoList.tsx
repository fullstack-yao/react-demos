import React, { FC, useState } from 'react';
import '../App.css';
import AddEditForm from '../components/AddEditForm';
import TodoTasks from '../components/TodoTasks';
import { ITask } from '../interfaces';

const ToDoList: FC = () => {
  const emptyTast: ITask = { taskName: '', deadline: 0 };
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [currTask, setCurrTask] = useState<ITask>(emptyTast);
  const [currIndex, setCurrIndex] = useState<number>(-1);

  const deleteTask = (index: number): void => {
    setTasks([...tasks.slice(0, index), ...tasks.slice(index + 1)]);
  };

  const editTask = (index: number): void => {
    setCurrTask(tasks[index]);
    setCurrIndex(index);
  };

  const addEditTask = (): void => {
    if (currIndex === -1) {
      setTasks([...tasks, currTask]);
    } else {
      setTasks([...tasks.slice(0, currIndex), currTask, ...tasks.slice(currIndex + 1)]);
    }
    cancelTask();
  };

  const cancelTask = (): void => {
    setCurrTask(emptyTast);
    setCurrIndex(-1);
  };

  return (
    <div className="ToDoList">
      <AddEditForm
        currTask={currTask}
        setCurrTask={setCurrTask}
        addEditTask={addEditTask}
        cancelTask={cancelTask}></AddEditForm>
      <TodoTasks tasks={tasks} deleteTask={deleteTask} editTask={editTask}></TodoTasks>
    </div>
  );
};

export default ToDoList;
