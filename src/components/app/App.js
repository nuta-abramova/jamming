import React, { Component } from 'react';
import './App.css';
import SearchBar from '../searchbar/SearchBar';
import SearchResults from '../searchresults/SearchResults';
import PlayList from '../playlist/PlayList';

class App extends Component {
  render() {
    return (
        <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar />
            <div className="App-playlist">
              <SearchResults />
              <PlayList />
            </div>
          </div>
        </div>
    );
  }
}

export default App;