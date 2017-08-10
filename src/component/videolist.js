import React, { Component } from 'react';
import VideoListItem from './videolistitem';

const VideoList = (props) => {
	const VideoItems = props.videos.map((video) => {
		return (
			<VideoListItem videoSelect={props.videoSelect} key={video.etag} video={video}/>
		);
	})

	return (
			<ul className="center">
				{VideoItems}
			</ul>
	);
}

export default VideoList;