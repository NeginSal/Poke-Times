import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { deletePost } from "../actions/postActions";

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const post = useSelector(state =>
    state.posts.find(post => post.id === id)
  );

  const handleDelete=(id)=>{
    dispatch(deletePost(id));
    console.log(id)
    navigate('/');
  }
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
         <button className="btn grey" onClick={() => handleDelete(post.id)}>Delete Post</button>
      </div>
    </div>
  ) : (<div className="center">
    "Loading post ..."
  </div>

  );
};
export default Post
