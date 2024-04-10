import React from "react";
import { Link, useParams } from "react-router-dom";
import Post from "./Post";

export const PostLink = ({ user = { posts: [] } }) => {
  // Use `useParams` to access the current route parameters
  const userID = user.id;
  // Assuming `params` contains the necessary info about the current path or any parent route parameter
  return (
    <li className="list-group-item text-truncate">
      {/* Use the `Link` component to navigate to the specific post */}
      {/* If the `PostLink` is used within a route that defines a `userId`, it can be accessed via `params.userId` */}
      <Link to={`/users/${userID}`} className="mt-2">{user.posts.length} Posts »</Link>
    </li>
  );
};

export default PostLink;
