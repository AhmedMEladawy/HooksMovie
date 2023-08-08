import logo from "./logo.svg";
import "./App.css";
import MovieCard from "./components/MovieCard";
import MovieList from "./components/MovieList";
import Data from "./components/MovieData";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Description from "./components/Description";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MovieList />,
    },
    {
      path: "description/:id",
      element: <Description />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
