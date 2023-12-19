import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";

const Thread = ({ userId }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/post/")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err)); // Ajoutez la gestion des erreurs
  }, []);

  return (
    <div className="thread-container">
      {posts
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map((post) => (
          <Post key={post._id} post={post} userId={userId} />
        ))}
    </div>
  );
};

export default Thread;
