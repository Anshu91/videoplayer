import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoItemSelected }) => {
  return (
    <div onClick={() => onVideoItemSelected(video)} className="video-item item">
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
