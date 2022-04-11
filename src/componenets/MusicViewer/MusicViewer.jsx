import React from 'react';


const MusicViewer  = (props) => {
    return (
        <table>
            <thead>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Genre</th>
                <th>Release Date</th>
            </thead>
            {props.songs.map((song) => {
                return(
                    <tr>
                        <td>{song.title}</td>
                        <td>{song.artist}</td>
                        <td>{song.album}</td>
                        <td>{song.genre}</td>
                        <td>{song.release_date}</td>
                    </tr>
                );
            })}
        </table>
    );
}

export default MusicViewer; 

