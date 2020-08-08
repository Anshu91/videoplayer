import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import { VideoDetail } from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  componentDidMount() {
    this.onSearchTextSubmit("sports car");
  }

  onVideoSelected = (video) => {
    console.log("video selected", video);
    this.setState({ selectedVideo: video });
  };

  onSearchTextSubmit = async (searchtext) => {
    console.log(searchtext);
    const response = await youtube.get("/search", {
      params: {
        q: searchtext,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTextSearch={this.onSearchTextSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="ten wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="six wide column">
              <VideoList
                videos={this.state.videos}
                onVideoListSelected={this.onVideoSelected}
              ></VideoList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
