import React from 'react';
import './TrackList.css';
import Track from '../track/Track';

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                <Track />
                <Track />
            </div>
        );
    }
}

export default TrackList;