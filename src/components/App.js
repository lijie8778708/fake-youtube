import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube, { baseParam } from "../apis/youtube";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };
  componentDidMount() {
    this.onInputSubmit("building");
  }
  onInputSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        ...baseParam,
        q: term
      }
    });
    this.setState({ videos: response.data.items });
    this.setState({ selectedVideo: this.state.videos[0] });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className='ui container'>
        <SearchBar onSubmit={this.onInputSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>

            <div className='five wide column'>
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
