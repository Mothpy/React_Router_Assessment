import React from "react";
import { deletePost } from "../api";
import NoPostSelectedMessage from "./NoPostSelectedMessage";
import { useParams, useNavigate } from "react-router-dom";

// useParams to find the post id 
  const Post = ({ posts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  
  const post = posts.find((post) => post.id === Number(postId));

  const handleDelete = async (id) => {
    const result = window.confirm("Are you sure you want to delete this post?");
    if (result) {
      await deletePost(id);
      navigate("/"); // Redirect to the home page after deleting the post
    }
  };

  if (post) {
    return (
      <article className="col-12 p-4 border">
        <h3 className="display-4 mb-4">{post.title}</h3>
        <p>{post.body}</p>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete Post
        </button>
      </article>
    );
  }
  return <NoPostSelectedMessage />;
};

export default Post;
