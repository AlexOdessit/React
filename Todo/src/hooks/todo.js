import { useState } from 'react';

export const useTodoList = () => {
  const [todos, setTodos] = useState([]);
  const [taskInfo, setTaskInfo] = useState('');
  const [error, setError] = useState('');

  const createListItem = () => {
    const newTodo = { task: taskInfo, completed: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleCheckboxChange = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const removeItem = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskInfo.trim() === '') {
      setError('Task cannot be empty!');
      return;
    }

    if (todos.some((todo) => todo.task === taskInfo)) {
      setError('This task exists!');
      return;
    }

    setError('');
    createListItem();
    setTaskInfo('');
  };

  return {
    todos,
    taskInfo,
    error,
    setTaskInfo,
    handleSubmit,
    handleCheckboxChange,
    removeItem,
  };
};
