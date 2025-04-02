import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./context/User.jsx";
import { SongProvider } from "./context/Song.jsx";
import { RadioProvider } from "./context/RadioContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <SongProvider>
        <RadioProvider>
          <App />
        </RadioProvider>
      </SongProvider>
    </UserProvider>
  </StrictMode>
);
