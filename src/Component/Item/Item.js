import React from "react";

const Item = ({ item }) => {
  const { title, body } = item;
  return (
    <div className="p-10 m-5 text-xl border-2 border-indigo-500 rounded-lg">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <h1>{body}</h1>
    </div>
  );
};

export default Item;
