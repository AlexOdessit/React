import React from 'react';
import styles from '../UserList/UserList.module.css';

export const userData = [
  { name: 'Alex', gender: 'male', id: 0 },
  { name: 'Jenifer', gender: 'female', id: 1 },
  { name: 'Klaus', gender: 'male', id: 2 },
  { name: 'Max', gender: 'male', id: 3 },
];

const UserCard = (props) => {
  const {
    user: { name, gender, id },
    removeUser,
  } = props;

  return (
    <>
      <p className={styles.item}>name:{name}</p>
      <p className={styles.item}>gender:{gender}</p>
      <p className={styles.item}>id:{id}</p>
      <button className={styles.remove} onClick={() => removeUser(id)}>
        Delete
      </button>
    </>
  );
};

export default UserCard;
