import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Upload_api from "./Components/Upload_api";

const App = createBrowserRouter([
  {
    path: "/Upload-Api-ImgBb",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Upload_api />,
      },
    ],
  },
]);

export default App;
