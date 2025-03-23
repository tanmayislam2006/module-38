import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {DeviceList} from "./LoopRender";
import FootballerList from "./footballer/FootballerList";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App></App> */}
  <FootballerList></FootballerList>
  </StrictMode>
);
