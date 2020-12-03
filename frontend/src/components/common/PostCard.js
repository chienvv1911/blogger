import React from "react";
import { Link } from 'react-router-dom'
import './PostCard.css'

const PostCard = ({ post }) => {
  return (
    <div className="post-content">
      <div className="post-cat">
        <div className="post-cat-list">
          <Link className="hover-flip-item-wrapper" to={`posts/${post._id}`}>
            <span className="hover-flip-item">
              <span data-text="FOOD">{post.category}</span>
            </span>
          </Link>
        </div>
      </div>
      <h4 className="title mt-2">
        <Link href="post-details.html" to={`posts/${post._id}`}>
          {post.title}
        </Link>
      </h4>
    </div>
  );
};

export default PostCard;
