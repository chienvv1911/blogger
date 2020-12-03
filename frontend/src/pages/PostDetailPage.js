import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PostDetailPage.css";

const PostDetailPage = ({ match }) => {
  const [post, setPost] = useState({});
  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await axios.get(`/api/posts/${match.params.id}`);
      setPost(data);
    };

    fetchPost();
  }, [match]);
  return (
    <div>
      <div className="post-detail">
        <div>
          {" "}
          <div className="category">
            <a
              href="https://zoroblog.com/category/development/"
              title="View all posts in Development"
            >
              { post.category ? post.category : "Development"}
            </a>
          </div>
        </div>
        <h1 className="title single-title entry-title">
          {post.title ? post.title : "PyTorch: Deep Learning and Artificial Intelligence"}
        </h1>
        {post.content && <div>{post.content}</div>}
      </div>
    </div>
  );
};

export default PostDetailPage;
