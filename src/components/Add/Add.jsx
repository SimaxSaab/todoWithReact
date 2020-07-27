import React, { Component } from 'react';

import t from './Add.module.css';

export default class Add extends Component {

  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { label } = this.state;
    this.setState({ label: '' });
    const cb = this.props.onItemAdded || (() => {});
    cb(label);
  };

  render() {
    return (
      <form
        className={`${t.addPanel} d-flex`}
        onSubmit={this.onSubmit}>

        <input type="text"
               className={`form-control ${t.newTodo}`}
               value={this.state.label}
               onChange={this.onLabelChange}
               placeholder="Put on the list" />

        <button type="submit"
                className="btn btn-outline-secondary">Add</button>
      </form>
    );
  }
}
