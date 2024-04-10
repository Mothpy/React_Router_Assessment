import React from "react";
import Post from "./Post";
import PostLink from "./PostLink";
import NoPostSelectedMessage from "./NoPostSelectedMessage";
import { useParams } from "react-router-dom";

export const PostList = ({ posts, users }) => {
  // Added useParams to get userId and postId from URL
  const { userId, postId } = useParams();

  // Check if userId exists in URL, throw error if not
  if (!userId) {
    throw new Error("No URL parameter for userId");
  }

  // Changed `${user.id}` to user.id in the find method
  const user = users.find((user) => user.id === Number(userId));
  
  // Filter posts based on userId
  const filteredPosts = posts.filter((post) => post.userId === Number(userId));

  // Updated key prop to use post.id instead of post.userId
  const postLinks = filteredPosts.map((post) => (
    <PostLink key={post.id} post={post} />
  ));

  // Check if postId is provided in URL, find selectedPost accordingly
  const selectedPost = postId
    ? posts.find((post) => post.id === Number(postId))
    : null;

  return (
    <div className="row pt-2">
      <div className="col-3">
        <ul className="list-group">{postLinks}</ul>
      </div>
      <div className="col-9">
        {/* Render Post or NoPostSelectedMessage based on selectedPost */}
        {selectedPost ? (
          <Post post={selectedPost} />
        ) : (
          <NoPostSelectedMessage />
        )}
      </div>
    </div>
  );
};

export default PostList;

