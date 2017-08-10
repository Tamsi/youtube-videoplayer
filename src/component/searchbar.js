import React, { Component } from 'react';
import '../App.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  onInputChange(term) {
    this.setState({term: term});
    this.props.changeTerm(term);
  }

  render() {
    return (
      <div>
        <input className="form-control center" value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)}
        placeholder="Search for videos..."/>
      </div>
    );
  }
}

export default SearchBar;
