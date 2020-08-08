import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoListSelected }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoItemSelected={onVideoListSelected}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};
export default VideoList;
