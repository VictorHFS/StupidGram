// src/components/Feed.js

import React from 'react';
import FeedPost from './feed-post';
import DUMMY_POSTS from './posts'; // Import your dummy data
import './feed.css'; // We'll create this CSS file

function Feed() {
  return (
    <div className="instagram-feed-container">
      {DUMMY_POSTS.map(post => (
        <FeedPost key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;