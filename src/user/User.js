import React, { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import UserProfile from "./UserProfile";
import PostList from "./PostList";
import PostsNav from "./PostsNav";
import ErrorMessage from "../common/ErrorMessage";
import { fetchUserWithPosts } from "../api";
import Card from "../home/Card";

export const User = ({setUser, user}) => {
  //const [user, setUser] = useState({ posts: [] });
  const [error, setError] = useState(undefined);
  const { userId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    fetchUserWithPosts(userId, abortController.signal)
      .then(setUser)
      .catch(setError);

    return () => abortController.abort();
  }, [userId]);

  if (error) {
    return (
      <ErrorMessage error={error}>
        <p>
          <Link to="/">Return Home</Link>
        </p>
      </ErrorMessage>
    );
  }

  return (
    <section className="container">
      <PostsNav />
      {user && (
        <div className="border p-4 h-100 d-flex flex-column">
          <h2 className="mb-3">{user.name}</h2>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link to={`/users/${userId}/profile`} className="nav-link">Profile</Link>
            </li>
            <li className="nav-item">
              <Link to={`/users/${userId}/posts`} className="nav-link">Posts</Link>
            </li>
          </ul>

          <div className="p-4 border border-top-0">
            <Outlet />
          </div>
        </div>
      )}
    </section>
  );
};

export default User;

