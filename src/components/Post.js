import React, { useState, useEffect } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const post = useSelector(state =>
    state.posts.find(post => post.id === id)
  )
  const deletePost=(id)=>{
    dispatch({type:'DELETE_POST',id:id});

  }
  // navigate("/");
  // const { id } = useParams();
  // const [post, setPost] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  //     const newData = await response.json();
  //     setPost(newData);
  //   };
  //   fetchData();
  // }, [id]);
  return post ? (
    <div className="post">
      <h4 className="center">{post.title}</h4>
      <p className="center">{post.body}</p>
      <div className="center">
              <button className="btn grey" onClick={deletePost}>Delete Post</button>
            </div>
    </div>
  ) : (<div className="center">
    "Loading post ..."
  </div>

  );
};

export default Post;
