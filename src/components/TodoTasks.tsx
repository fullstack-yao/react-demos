import React from 'react';
import { ITask } from '../interfaces';

interface Props {
  tasks: ITask[];
  setTasks: (tasks: ITask[]) => void;
  editTask: (index: number) => void;
}

const Tasks = ({ tasks, setTasks, editTask }: Props) => {
  const deleteTask = (index: number): void => {
    setTasks([...tasks.slice(0, index), ...tasks.slice(index + 1)]);
  };

  const completeTask = (index: number): void => {
    const task = { ...tasks[index] };
    task.done = !task.done;
    setTasks([...tasks.slice(0, index), task, ...tasks.slice(index + 1)]);
  };

  return (
    <div className="todoTasks">
      {tasks.map((task: ITask, index: number) => (
        <div
          className={task.done ? 'task done' : 'task'}
          key={index}
          onClick={() => completeTask(index)}>
          <div className="content">
            <span>{task.taskName}</span>
            <span>{task.deadline}</span>
          </div>
          <button
            onClick={() => {
              editTask(index);
            }}>
            Edit
          </button>
          <button
            onClick={() => {
              deleteTask(index);
            }}>
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
