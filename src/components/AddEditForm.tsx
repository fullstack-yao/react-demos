import React, { ChangeEvent } from 'react';
import { ITask } from '../interfaces';

interface IProps {
  currTask: ITask;
  setCurrTask: (task: ITask) => void;
  addEditTask: () => void;
  cancelTask: () => void;
}

const AddEditForm = ({ currTask, setCurrTask, addEditTask, cancelTask }: IProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const copyTask = { ...currTask };
    if (event.target.name === 'taskName') {
      copyTask.taskName = event.target.value;
    } else {
      copyTask.deadline = Number(event.target.value);
    }
    setCurrTask(copyTask);
  };

  return (
    <div className="TodoListHeader">
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Task..."
          name="taskName"
          value={currTask.taskName}
          onChange={handleChange}
          className="input"
        />
        <input
          type="number"
          placeholder="Deadline (in Days)..."
          name="deadline"
          value={currTask.deadline}
          onChange={handleChange}
          className="input"
        />
      </div>
      <button onClick={addEditTask}>Add/Edit Task</button>
      <button onClick={cancelTask}>Cancel Task</button>
    </div>
  );
};

export default AddEditForm;
