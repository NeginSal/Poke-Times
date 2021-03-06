import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Pokeball from "../pokeball.png";

const Home = () => {
  const posts = useSelector((state) => state.posts);

  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPosts(data.slice(0, 10));
  //     });
  // }, []);
  return (
    <div className="container">
      <h4 className="center">Home</h4>
      {posts.map((post) => (
        <div className="post card" key={post.id}>
          <img src={Pokeball} alt="A pokeball" />
          <div className="card-content">
            <Link to={`/posts/${post.id}`}>
              <span className="card-title red-text">{post.title}</span>
            </Link>
            <p>{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
// const mapStateToProps = (state) => {
//   return {
//     posts: state.posts,
//   };
// };

export default Home;
