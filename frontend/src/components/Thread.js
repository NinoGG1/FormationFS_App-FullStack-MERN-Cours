import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../features/post.slice";

const Thread = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.postsData);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="thread-container">
      {posts
        .slice()
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map((post) => (
          <Post key={post._id} post={post} />
        ))}
    </div>
  );
};

export default Thread;
