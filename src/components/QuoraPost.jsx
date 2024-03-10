import React from "react";
import "../styles/QuoraPost.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CommentIcon from "@mui/icons-material/Comment";
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import CommentSection from "./CommentSection";

const QuoraPost = ({
  authorName,
  authorImage,
  title,
  content,
  images,
  channelName,
  channelImage,
  likeCount,
  dislikeCount,
  commentCount,
}) => {
  const [likeClicked, setLikeClicked] = React.useState(false);
  const [dislikeClicked, setDisLikeClicked] = React.useState(false);
  const [likeCounter, setLikeCounter] = React.useState(likeCount);
  const [dislikeCounter, setDislikeCounter] = React.useState(dislikeCount);
  const [commentIconclicked,setCommentIconclicked] = React.useState(false);

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
          <button
            className="like-count"
            onClick={() => {
              setDisLikeClicked(!dislikeClicked);
              dislikeClicked
                ? setDislikeCounter((prev) => prev - 1)
                : setDislikeCounter((prev) => prev + 1);
            }}
          >
            {dislikeCounter}{" "}
            {dislikeClicked ? <ThumbDownAltIcon /> : <ThumbDownOffAltIcon />}{" "}
          </button>
          <button className="comment-count" onClick={()=>setCommentIconclicked(!commentIconclicked)}>
            {commentCount} <CommentIcon />
          </button>
          {commentIconclicked && <CommentSection/>}
        </div>
      </div>
    </div>
  );
};

export default QuoraPost;
