import React from "react";
import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
  const { title, body, id } = item;
  const navigate = useNavigate();
  const handlerNavigate = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div className="p-10 m-5 text-xl border-2 border-indigo-500 rounded-lg">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <h1>{body}</h1>

      <button
        onClick={handlerNavigate}
        className="border-2 border-indigo-500 rounded-lg mt-4"
      >
        Show Details
      </button>
    </div>
  );
};

export default Item;
