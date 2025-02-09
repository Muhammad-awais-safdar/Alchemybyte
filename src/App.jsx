import { RouterProvider } from "react-router-dom";
import { router } from "./Router/route";

const App = () => {
  return (
    
    <RouterProvider router={router} />
  );
}

export default App;