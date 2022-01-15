import React ,{useState,useEffect}from "react";
import { useParams } from "react-router-dom";

const Post = () => {
    const {id}= useParams();


    return (
        <div className="container">
        <h4>route param - {id} </h4>

        </div>
     );
}

export default Post;