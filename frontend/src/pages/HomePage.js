import React, { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "../components/common/PostCard";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get("/api/posts");
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="row">
      {posts && (
        <>
          {posts.map((post, index) => (
            <div className="col-md-4 col-xs-12" key={index}>
              <PostCard post={post} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default HomePage;
