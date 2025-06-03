// src/components/FeedPost.js

import React from 'react';
import './feed-post.css';

function FeedPost({ post }: any) {
  const { username, avatar, imageUrl, description, likes, comments } = post;

  return (
    <div className="feed-post">
      <div className="post-header">
        <img src={avatar} alt={`${username}'s avatar`} className="avatar" />
        <span className="username">{username}</span>
      </div>
      <div className="post-image-container">
        <img src={imageUrl} alt="Post" className="post-image" />
      </div>
      <div className="post-actions">
        {/* Simple icons, replace with actual icon library if needed */}
        <button className="action-button">❤️</button> {/* Like */}
        <button className="action-button">💬</button> {/* Comment */}
        <button className="action-button">✈️</button> {/* Share */}
      </div>
      <div className="post-details">
        <p className="likes">{likes.toLocaleString()} likes</p>
        <p className="description">
          <span className="username">{username}</span> {description}
        </p>
        <p className="comments">View all {comments} comments</p>
      </div>
    </div>
  );
}

export default FeedPost;