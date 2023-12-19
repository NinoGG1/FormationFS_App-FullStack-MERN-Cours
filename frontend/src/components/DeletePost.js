import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../features/post.slice";

const DeletePost = ({ postId }) => {
  const dispatch = useDispatch();

  console.log(postId);
  const handleDelete = () => {
    axios.delete("http://localhost:3001/post/" + postId);
    dispatch(deletePost(postId));
  };

  return (
    <span id="delete-btn" onClick={() => handleDelete()}>
      &#10006;
    </span>
  );
};

export default DeletePost;
