import React from 'react';

import Item from './Item/Item';

import t from './List.module.css';

const TodoList = ({ items, onToggleImportant, onToggleDone, onDelete }) => {

  const elements = items.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <Item
          { ...itemProps }
          onToggleImportant={ () => onToggleImportant(id) }
          onToggleDone={ () => onToggleDone(id) }
          onDelete={ () => onDelete(id) } />
      </li>
    );
  });

  return (<ul className={`${t.todoList} list-group`}>{ elements }</ul>);
};

export default TodoList;
