import axios from "axios";
import React from "react";

const DeletePost = ({ postId }) => {
  console.log(postId);
  const handleDelete = () => {
    axios.delete("http://localhost:3001/post/" + postId);
  };

  return (
    <span id="delete-btn" onClick={() => handleDelete()}>
      &#10006;
    </span>
  );
};

export default DeletePost;
