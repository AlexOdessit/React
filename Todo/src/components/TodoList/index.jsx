import React from 'react';
import { useTodoList } from '../../hooks/todo';
import classNames from 'classnames';
import styles from './TodoList.module.scss';
import boxImg from './images/box.png';

const TodoList = () => {
  const {
    todos,
    taskInfo,
    error,
    setTaskInfo,
    handleSubmit,
    handleCheckboxChange,
    removeItem,
  } = useTodoList();

  return (
    <article className={styles.dolist_wrap}>
      <form id={styles.do_form} onSubmit={handleSubmit}>
        <label htmlFor='do_input'>Task:</label>
        <input
          type='text'
          id={styles.do_input}
          value={taskInfo}
          onChange={(e) => setTaskInfo(e.target.value)}
        />
        <button id={styles.addbtn} type='submit'>
          Add Task
        </button>
      </form>
      {error && <p>{error}</p>}

      {todos.map((todo, index) => (
        <li
          key={index}
          className={classNames({ [styles.do_itembox]: !!todo.task })}
        >
          <input
            type='checkbox'
            checked={todo.completed || false}
            onChange={() => handleCheckboxChange(index)}
          />
          <span>{todo.completed ? 'Done!' : todo.task}</span>
          <img
            src={boxImg}
            alt='Remove'
            className={styles.remove_item}
            onClick={() => removeItem(index)}
          />
        </li>
      ))}
    </article>
  );
};

export default TodoList;
