import React from 'react';
import './TrackList.css';
import Track from '../track/Track';

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {
/*                    this.props.tracks.map(track => {
                        return (
                            <Track id={track.id} name={track.name} artist={track.artist} />
                        );
                       })*/
                    }
            </div>
        );
    }
}

export default TrackList;