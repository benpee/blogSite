import React, { useState, useEffect } from 'react'
import Card from './UI/Card';
import blogPost from './../../data/blog.json';
import { NavLink } from 'react-router-dom';

function SideBar(props) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const post = blogPost.data;
    setPosts(post);
  }, post);
  
  return (
    <div className="sidebarContainer">
      <Card style={{ margin-bottom: "20px" }}>
        <div className="cardHeader">
          <span>About Us</span>
          <div className="profileImage">
           <img src={} alt={} />
          </div>
        </div>
      </Card>
      <Card>
        <div className="cardHeader">
          <span>Social Networks</span>
        </div>
        <div className="cardBody">
          <p className="personalBio">I am Ajibola Pius Oyeyemi, a junior frontend developer with convinction of becoming a senior frontend and software developer soon by God's Grace.</p>
        </div>
      </Card>
      <Card>
        <div className="cardHeader">
          <span>Recent Post</span>
        </div>
        <div className="recentPosts">
          {posts.map(post => {
            return (
              <NavLink to="/post/${post.id}">
                <div className="recentPost">
                  <h3>{post.blogTitle}</h3>
                  <span>{post.postedOn}</span>
                </div>
              </NavLink>
            );
          }) }
        </div>
      </Card>
    </div>
  );
}

export default SideBar