import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./Component/About/About";
import Home from "./Component/Home/Home";
import Main from "./Component/Main/Main";
import Order from "./Component/Order/Order";
import Post from "./Component/Post/Post";

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
          element: <Post></Post>,
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/posts");
          },
        },
        { path: "/order", element: <Order></Order> },
        { path: "/about", element: <About></About> },
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
