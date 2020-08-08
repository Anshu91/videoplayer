import React from "react";

export const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Please select a video..</div>;
  }
  return (
    <div>
      <div className="ui embed">
        <iframe
          title={video.snippet.title}
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="ui segment">
        <div className="ui header">{video.snippet.title}</div>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};
