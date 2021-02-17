import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';
import UserCard from './user';

function UsersList() {
  const { users } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { getAllUsers } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <UserCard user={user} />
        </li>
      ))}
    </ul>
  );
}

export default UsersList;
