import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Upload_api from "./Components/Upload_api";
import Home from "./Home/Home";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Upload-Api-ImgBb/:id",
        element: <Upload_api />,
      },
    ],
  },
]);

export default App;
