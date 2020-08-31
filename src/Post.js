import React from 'react';

const Post = ({ post: { id, title, body } }) => {
  return (
    <div className="post">
      <h2>Post: {id}</h2>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default Post;
