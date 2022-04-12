import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import AddSong from './AddSong/AddSong';
import MusicViewer from './MusicViewer/MusicViewer';
import SearchBar from './SearchBar/SearchBar';
import Header from './Header/Header';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          songs : [],
          filteredSongs : []
        }
  }

  componentDidMount(){
      this.getSongs();
  }

  async getSongs(){
      let response = await axios.get('http://127.0.0.1:8000/api/music/');
      console.log(response);
      this.setState({
          songs: response.data,
          filteredSongs: response.data
      });
  }

  async deleteSong(ID){
    let response = await axios.delete(`http://127.0.0.1:8000/api/music/${ID}/`);
           console.log(response)
        window.location.reload();
    }

    filterSong2 = (searchTerm) =>{
        if(searchTerm == ''){
            this.setState({
                filteredSongs : this.state.songs
            })
        }
        else{
            let filteredResults = this.state.songs.filter(song => {
                //search by partial title
                let songString =song.title.toLowerCase()
                let userSongSearch = searchTerm.toLowerCase()
                if (songString.includes(userSongSearch)){
                    return song
                }
                //search by partial artist name
                let songArtist = song.artist.toLowerCase()
                let userArtistSearch = searchTerm.toLowerCase()
                if (songArtist.includes(userArtistSearch)){
                    return song
                }
                //search by partial album title
                let songAlbum = song.album.toLowerCase()
                let userAlbumSearch = searchTerm.toLowerCase()
                if (songAlbum.includes(userAlbumSearch)){
                    return song
                }
                //search by genre
                let songGenre = song.genre.toLowerCase()
                let userGenreSearch = searchTerm.toLowerCase()
                if (songGenre.includes(userGenreSearch)){
                    return song
                }
                //search for a release_date
                let dateString = song.release_date
                let userSearch = searchTerm.toLowerCase()
                if (dateString.includes(userSearch)){
                    return song
                }
            });
            this.setState({
                filteredSongs : filteredResults
            })
        }
      
    }
    filterSongs = (arrayOfSongs) => {
        console.log(arrayOfSongs)
        this.setState({
            songs: arrayOfSongs
        })
    }

    render() { 
      return (
          <div className = 'center'>
              <Header />
              <SearchBar newFilter={this.filterSong2} search={this.state.songs} filterTrigger= {this.filterSongs}/>
              <MusicViewer songs = {this.state.filteredSongs} delete ={this.deleteSong}/>
              <AddSong />
          </div>
       );
  }
}

export default App ; 

