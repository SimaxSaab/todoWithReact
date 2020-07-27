import React from 'react';
import t from './Header.module.css';

const Header = ({toDo, done}) => {
  return (
    <div className={`${t.header} d-flex`}>
      <h1>Todo List</h1>
      <h2>{toDo} more to do, {done} done</h2>
    </div>
  );
};

export default Header;
