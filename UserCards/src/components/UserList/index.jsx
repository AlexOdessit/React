import React from 'react';
import UserCard, { userData } from '../UserCard';
import styles from './UserList.module.css';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userData };
  }

  removeUser = (id) => {
    const updatedUserData = this.state.userData.filter(
      (user) => id !== user.id
    );
    this.setState({ userData: updatedUserData });
  };

  mapUsersCard = (user) => (
    <li key={user.id} className={styles.card}>
      <UserCard user={user} removeUser={this.removeUser} />
    </li>
  );

  render() {
    const { userData } = this.state;

    const userItem = userData.map(this.mapUsersCard);

    return <article className={styles.wrap}>{userItem}</article>;
  }
}
export default UserList;
