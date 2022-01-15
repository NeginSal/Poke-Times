import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect((id) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.slice(0, 10));
      });
  }, []);
  return (
    <div className="container">
    <h4 className="center">Home</h4>
      {posts.map((post) => (
        <div className="post card" key={post.id}>
          <div className="card-content">
          <Link to={`/posts/ ${post.id}`}>
          <span className="card-title">{post.title}</span>
            <p>{post.body}</p>
          </Link>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
