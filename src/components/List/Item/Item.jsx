import React from 'react';

import t from './Item.module.css';

const Item = ({ important, done,
      label, onToggleImportant, onToggleDone, onDelete }) => {

  let classNames = t.item;
  if (important) {
    classNames += ' ' + t.important;
  }

  if (done) {
    classNames += ' ' + t.done;
  }


  return (
    <span className={classNames}>
      <span
        className={t.itemLabel}
        onClick={onToggleDone}>{label}</span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={onToggleImportant}>
        <i className="fa fa-exclamation"></i>
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
              onClick={onDelete}>
        <i className="fa fa-trash-o"></i>
      </button>
    </span>
  );
};

export default Item;
