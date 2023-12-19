import React, { useEffect, useState } from "react";
import LikePost from "./LikePost";
import { set } from "mongoose";
import axios from "axios";
import DeletePost from "./DeletePost";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../features/post.slice";

const Post = ({ post }) => {
  const [isAuthor, setIsAuthor] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const userId = useSelector((state) => state.user.userId);
  const dispatch = useDispatch();

  useEffect(() => {
    if (post.author === userId) {
      setIsAuthor(true);
    } else {
      setIsAuthor(false);
    }
  }, [post, userId]);

  const handleEdit = () => {
    if (newMessage) {
      axios.put("http://localhost:3001/post/" + post._id, {
        message: newMessage,
      });
      dispatch(updatePost([newMessage, post._id]));
    }
  };

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
      {isEditing ? (
        <div className="edit-container">
          <textarea
            defaultValue={post.message}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <div className="btn-container">
            <button
              onClick={() => {
                setIsEditing(false);
                handleEdit();
              }}
            >
              Valider
            </button>
          </div>
        </div>
      ) : (
        <p>{newMessage ? newMessage : post.message}</p>
      )}

      <div className="icons-part">
        <LikePost post={post} userId={userId} />
        {isAuthor && (
          <div className="update-delete-icons">
            <span
              id="update-btn"
              onClick={() => {
                setIsEditing(!isEditing);
                handleEdit();
              }}
            >
              &#10000;
            </span>
            <DeletePost postId={post._id} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
