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
          songs : []
        }
  }

  componentDidMount(){
      this.getSongs();
  }

  async getSongs(){
      let response = await axios.get('http://127.0.0.1:8000/api/music/');
      console.log(response);
      this.setState({
          songs: response.data
      });
  }

  async deleteSong(ID){
    let response = await axios.delete(`http://127.0.0.1:8000/api/music/${ID}/`);
    console.log(response)
    window.location.reload();
}

  render() { 
      return (
          <div className = 'center'>
              <Header />
              <SearchBar />
              <MusicViewer songs = {this.state.songs} delete ={this.deleteSong}/>
              <AddSong />
          </div>
       );
  }
}

export default App ; 

