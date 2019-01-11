import React from 'react';
import './App.css';
import PlayList from '../playlist/PlayList.js';
import SearchResults from '../searchresults/SearchResults.js';
import SearchBar from '../searchbar/SearchBar.js';



class App extends React.Component {
  constructor(props){
     super(props);
     this.state = {
         searchResults: [],
         playlistName : 'Anything',
         playlistTracks: []
     }
  }
  addTrack(){

    }
  render() {
    return (
        <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar />
            <div className="App-playlist">
              <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
              <PlayList playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
