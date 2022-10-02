import React from "react";
import { useLoaderData } from "react-router-dom";
import Item from "../Item/Item";

const Post = () => {
  const post = useLoaderData();

  return (
    <div>
      <h1>Post</h1>
      <div className="grid grid-cols-3">
        {post.map((item) => (
          <Item item={item} key={item.id}></Item>
        ))}
      </div>
    </div>
  );
};

export default Post;
