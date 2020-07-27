import React, { Component } from 'react';

import t from './Search.module.css';

export default class SearchPanel extends Component {

  state = {
    word: ''
  };

  onWordChange = (e) => {
    const {onSearchChange = () => {}} = this.props;
    this.setState({
      word: e.target.value
    });

    onSearchChange(e.target.value);
  };

  render() {
    return (
      <input type="text"
             className={`form-control ${t.searchInput}`}
             placeholder="Search"
             value={this.state.word}
             onChange={ this.onWordChange } />
    );
  };
}
