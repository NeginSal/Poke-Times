import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const newData = await response.json();
      setPost(newData);
    };
    fetchData();
  }, [id]);
  return post ? (
    <div>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  ) : (
    "Loading post"
  );
};

export default Post;
