import React from 'react';
import { ITask } from '../interfaces';

interface Props {
  tasks: ITask[];
  deleteTask(index: number): void;
  editTask(index: number): void;
}

const Tasks = ({ tasks, deleteTask, editTask }: Props) => {
  return (
    <div className="todoTasks">
      {tasks.map((task: ITask, index: number) => (
        <div className="task" key={index}>
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
