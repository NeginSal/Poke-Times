import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const newData = await response.json();
      setPost(newData);
    };
    fetchData();
  }, [id]);
  return post ? (
    <div className="post">
      <h4 className="center">{post.title}</h4>
      <p className="center">{post.body}</p>
    </div>
  ) : (<div className="center">
    "Loading post ..."
  </div>

  );
};

export default Post;
