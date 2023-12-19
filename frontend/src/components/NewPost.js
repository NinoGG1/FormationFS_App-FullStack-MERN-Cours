import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../features/post.slice";

const NewPost = () => {
  const [message, setMessage] = useState("");
  const userId = useSelector((state) => state.user.userId);
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
    const data = { message, author: userId };

    axios
      .post("http://localhost:3001/post", data)
      .then((res) => {
        // Supposons que res.data contient le post avec l'ID de MongoDB
        dispatch(addPost(res.data));
        setMessage("");
      })
      .catch((err) => {
        console.error("Erreur lors de la création du post :", err);
        // Gérer l'erreur (afficher un message à l'utilisateur, par exemple)
      });
  };

  return (
    <div>
      <form className="new-post-container" onSubmit={handleForm}>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Quoi de neuf ?"
          value={message}
        ></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default NewPost;
