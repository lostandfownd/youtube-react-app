import React, { Component } from 'react';



class Search extends Component {
  filterUpdate() {
    const val = this.myValue.value
    this.props.filterUpdate(val)
  }
  render () {
    // TODO: Document input refs and change events React
    return (
        <div className="search-bar">
          <form>
            <input 
              type="text"
              ref={ (value) => {this.myValue = value} }
              placeholder="type the filter"
              onChange={this.filterUpdate.bind(this)}
            />
          </form>
        </div>
    );
  }
}

export default Search;