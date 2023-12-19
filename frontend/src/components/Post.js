import React from "react";
import LikePost from "./LikePost";

const Post = ({ post, userId }) => {
  const dateFormater = (date) => {
    const newDate = new Date(date);
    return `${newDate.getDate()}/${
      newDate.getMonth() + 1
    }/${newDate.getFullYear()} à ${newDate.getHours()}:${newDate.getMinutes()}`;
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3>{post.author}</h3>
        <p>Posté le : {dateFormater(post.createdAt)}</p>
      </div>
      <p>{post.message}</p>
      <div className="icons-part">
        <LikePost post={post} userId={userId} />
      </div>
    </div>
  );
};

export default Post;
