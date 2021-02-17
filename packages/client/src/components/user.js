import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';

function UserCard(props) {
  const {
    user: { id, email, name },
  } = props;
  const dispatch = useDispatch();
  const { deleteUser } = bindActionCreators(actionCreators, dispatch);

  const onClickHandler = () => {
    deleteUser(id);
  };

  return (
    <div>
      <h1>{name}</h1>
      <a href="/">{email}</a>
      <button onClick={onClickHandler}>delete</button>
    </div>
  );
}

export default UserCard;
