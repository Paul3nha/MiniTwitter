import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./routes/Layout.jsx";
import { Home } from "./routes/Home.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={"dwcwdc"} />
          <Route path="tweets" element={"dcdwc"} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
