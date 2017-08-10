import React, { Component } from 'react';

const VideoDetails = ({video}) => {
	if (!video) {
		return (<div>Loading...</div>);
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

	return (
		<div className="row center">
			<div className="col-md-12">
				<iframe className="video" src={url} frameborder="0" allowfullscreen></iframe>
			</div>
		</div>
	);
}

export default VideoDetails;