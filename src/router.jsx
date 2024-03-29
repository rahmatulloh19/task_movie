import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/Home/Home";
import { TopRated } from "./pages/TopRated/TopRated";
import { Upcoming } from "./pages/Upcoming/Upcoming";
import { SinglePage } from "./pages/SinglePage/SinglePage";
import { ActorPage } from "./pages/ActorPage/ActorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/top-rated",
        element: <TopRated />,
      },
      {
        path: "/upcoming",
        element: <Upcoming />,
      },
      {
        path: "movie/:single_page",
        element: <SinglePage />,
      },
      {
        path: "actor/:single_page",
        element: <ActorPage />,
      },
      {
        path: "*",
        element: (
          <>
            <h1>404 ERROR !!!</h1>
          </>
        ),
      },
    ],
  },
]);
