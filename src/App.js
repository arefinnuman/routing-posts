import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./Component/About/About";
import Home from "./Component/Home/Home";
import Main from "./Component/Main/Main";
import Order from "./Component/Order/Order";
import Post from "./Component/Post/Post";
import PostDetails from "./Component/PostDetails/PostDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "home", element: <Home></Home> },
        {
          path: "/post",
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/posts");
          },
          element: <Post></Post>,
        },
        {
          path: "/post/:postId",
          loader: async ({ params }) => {
            return fetch(
              `https://jsonplaceholder.typicode.com/posts/${params.postId}`
            );
          },
          element: <PostDetails></PostDetails>,
        },
        { path: "/order", element: <Order></Order> },
        { path: "/about", element: <About></About> },
        { path: "*", element: <div>404 this is not found</div> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
