import React from "react";

class SearchBar extends React.Component {
  state = { searchText: "" };
  onInputChange = (event) => {
    this.setState({ searchText: event.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onTextSearch(this.state.searchText);
    //video-player-285810
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label> Video Search</label>
            <input
              type="text"
              onChange={this.onInputChange}
              value={this.state.searchText}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
