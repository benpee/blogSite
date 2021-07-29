import React, {useState} from 'react'
import BlogPost from './BlogPost';
import SideBar from './SideBar';

function Post() {
  return (
    <section className="container">
      <BlogPost {...props} />
      <SideBar />
    </section>
  );
}

export default Post