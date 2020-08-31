import React from 'react';

const Post = ({ post: { id, title, body } }) => {
  return (
    <div className="post">
      <h3>
        Post {id}: {title}
      </h3>
      <p>{body}</p>
    </div>
  );
};

export default Post;
