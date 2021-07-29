import React, { useState, useEffect } from 'react'
import Card from './UI/Card';
import blogPost from '../../data/blog.json';

function BlogPost(props) {
  const [post, setPost] = useState([]);
  const [postId, setPostId] = useState("");
  useEffect (() => {
    const postId = props.match.params.postId;
    const post = blogPost.data.find(post => post.id === postId);
    setPost(post);
    setPost(postId)
  }, [post, props.match.params.postId]);

  return (
    <div className="blogpostContainer">
      <Card>
        <div className="blogHeader">
          <span className="blogCategory">{post.blogCategory}</span>
          <h1 className="title">
            {post.blogTitle} </h1>
          <span className="postedBy">posted on {post.PostedOn} by {post.author}</span>
        </div>
        <div className="postImageContainer">
          <img src={require('../../blogPostImages/' + post.blogPostImage)} alt={post.blogTitle} />
        </div>
        <div className="postContent">
          <h3>{post.BlogTitle}</h3>
          <p>{post.blogText}</p>
        </div>
      </Card>
    </div>
  );
}

export default BlogPost