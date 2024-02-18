import React from "react";
import "../styles/QuoraPost.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CommentIcon from "@mui/icons-material/Comment";

const QuoraPost = ({
  authorName,
  authorImage,
  title,
  content,
  images,
  channelName,
  channelImage,
  likeCount,
  commentCount,
}) => {
  const [likeClicked, setLikeClicked] = React.useState(false);
  const [likeCounter, setLikeCounter] = React.useState(likeCount);
  return (
    <div className="quora-post">
      <div className="post-header">
        <img
          src={authorImage}
          alt={`Author ${authorName}`}
          className="author-image"
        />
        <div className="author-info">
          <span className="author-name">{authorName}</span>
          <span className="channel-name">{channelName}</span>
        </div>
      </div>
      <div className="post-content">
        <h2 className="post-title">{title}</h2>
        <p className="post-text">{content}</p>
        {images && (
          <div className="post-images">
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Post Image ${index}`} />
            ))}
          </div>
        )}
      </div>
      <div className="post-footer">
        <img
          src={channelImage}
          alt={`Channel ${channelName}`}
          className="channel-image"
        />
        <div className="interaction-counts">
          <button
            className="like-count"
            onClick={() => {
              setLikeClicked(!likeClicked);
              likeClicked
                ? setLikeCounter((prev) => prev - 1)
                : setLikeCounter((prev) => prev + 1);
            }}
          >
            {likeCounter}{" "}
            {likeClicked ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}{" "}
          </button>
          <button className="comment-count">
            {commentCount} <CommentIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoraPost;
