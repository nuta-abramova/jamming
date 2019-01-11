import React from 'react';
import './SearchResults.css';
import TrackList from '../tracklist/TrackList'

class SearchResults extends React.Component {
    constructor(props){
        super(props);
        this.state = {tracks: this.props.searchResults}
    }
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList tr={this.state.tracks} />
            </div>
        );
    }
}

export default SearchResults;