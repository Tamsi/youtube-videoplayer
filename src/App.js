import React, { Component } from 'react';
import SearchBar from './component/searchbar';
import VideoList from './component/videolist';
import VideoDetails from './component/videodetails';
import YTSearch from 'youtube-api-search';
import logo from './logo.svg';
import './App.css';

const API_KEY = 'AIzaSyDMmbe2zT_EkLN9Btjhc20ZGAk0ERVzifA';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      videoSelected: null
    };

    this.videoSearch(' ');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState(
        {
          videos: videos,
          videoSelected: videos[0]
        }
      );
    });
  }

  videoSelect(video) {
    this.setState(
      {
        videoSelected: video
      }
    );
  }

  render() {
    return (
      <div className="App">
        <SearchBar className="search-bar" changeTerm={term => this.videoSearch(term)}/>
        <VideoDetails video={this.state.videoSelected}/>
        <VideoList videoSelect={video => this.videoSelect(video)} videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
