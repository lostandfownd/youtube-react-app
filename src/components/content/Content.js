import React, { Component } from 'react';
import Search from './elements/search';
import ShortList from './elements/shortList';
import NameList from './elements/nameList';
import './Content.css';

import data from '../../data/data';

class Content extends Component {
    constructor(props) {
      super(props);
      this.state = {
          filterText: '',
          favourites: []
      };
  }

  filterUpdate(value) {
      this.setState({
          filterText: value
      });
  }

  addFavourite(id) {
    const favList = this.state.favourites.concat([id]);

    this.setState({
      favourites: favList
    });
  }

  render () {
    // dont console log in return method or it breaks
    // console.log("our data is", data);
    // I exposed data as it is needed for all logic

    return (
      <section className="app-section">
        <div>
          <Search 
            filterText={this.state.filterText} 
            filterUpdate={this.filterUpdate.bind(this)}
          />
        </div>

        <div>
          <ShortList 
            favourites={this.state.favourites}
            data={data}
          />
        </div>

        <article>
          <NameList 
            data={data}
            filterText={this.state.filterText}
            // TODO: Research bind(this)
            addFavourite={this.addFavourite.bind(this)}
          />
        </article>
      </section>
    );
  }
}

export default Content;