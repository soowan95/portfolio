import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./page/Home";
import Crello from "./page/project/crello/Crello";

const routes = createBrowserRouter(
  createRoutesFromElements(<Route path="/portfolio" element={<Home />} />),
);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
