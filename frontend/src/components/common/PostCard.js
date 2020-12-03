import React from "react";
import { Link } from 'react-router-dom'
import './PostCard.css'

const PostCard = ({ post }) => {
  return (
    <div className="post-content">
      <div className="post-cat">
        <div className="post-cat-list">
          <Link className="hover-flip-item-wrapper" to={`post/${post.id}`}>
            <span className="hover-flip-item">
              <span data-text="FOOD">FOOD</span>
            </span>
          </Link>
        </div>
      </div>
      <h4 className="title mt-2">
        <Link href="post-details.html" to={`post/${post.id}`}>
          Security isn’t just a technology problem it’s about design, too{" "}
        </Link>
      </h4>
    </div>
  );
};

export default PostCard;
