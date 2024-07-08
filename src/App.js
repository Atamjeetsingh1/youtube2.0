import Body from "./components/Body";
import Navbar from "./components/Navbar";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Watch from "./components/Watch";
import Feed from "./components/Feed";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Feed />
      },
      {

        path: "/watch",
        element: <Watch />
      }
    ]
  }
])
//'/'(home) p 3 chize dikhengi feed,navbar,,sidear,
//children ko outlet render krta h
//children krta ye h ke jo outlet tha na isme sare children ko render krta h
// "/" k andr b *route ho skte h
//real time youtube like link experience in search
function App() {
  return (
    <div>
      <Navbar />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
