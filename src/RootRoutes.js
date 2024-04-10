import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import CardList from './home/CardList';
import Card from './home/Card';
import User from './user/User';
import UserProfile from './user/UserProfile';
import PostList from './user/PostList';
import PostLink from './user/PostLink';
import Post from './user/Post';
import NoPostSelectedMessage from './user/NoPostSelectedMessage';

function RootRoutes() {
  const [user, setUser] = useState({ posts: [] });
  /*
    TODO: There is no need to add a <Router>, it is in index.js.

    The <CardList /> component should be shown when the user is on the index path.

    The <User /> component should be shown when the user is on the following path:
    /users/:userId

    Display <NotFound /> when appropriate

    The <PostList /> component should show on the following route:
    /users/:userId/posts

    The <UserProfile /> component should show on the following route:
    /users/:userId
  */
  return (
    <Routes>
      <Route path="/" element={<CardList />} />
      <Route path="/users/:userId" element={<User setUser={setUser} user={user} />}>
        <Route path="profile" element={<UserProfile user={user}/>} />
        <Route path="posts" element={<PostLink />}>
          <Route path="postList" element={<PostList />} />
          <Route path=":postId" element={<Post />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default RootRoutes;
