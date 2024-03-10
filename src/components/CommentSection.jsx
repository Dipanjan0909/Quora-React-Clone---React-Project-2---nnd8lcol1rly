import React from 'react';
import '../styles/CommentSection.css'
const CommentSection = ({ comments }) => {
  return (
    <div className="comment-section">
      <h2>Comments</h2>
      <div className="comments-list">
        {comments?.map((comment, index) => (
          <div key={index} className="comment">
            <div className="comment-user">{comment.user}</div>
            <div className="comment-content">{comment.content}</div>
          </div>
        ))}
      </div>
        <input type='text'placeholder='write your comment'/>
    </div>
  );
};

export default CommentSection;
