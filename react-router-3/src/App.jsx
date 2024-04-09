import "./App.css";
import { Routes, Route } from "react-router-dom";
import ShowGithubUser from "./components/ShowGithubUser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/:username" element={<ShowGithubUser />} />
      </Routes>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </>
  );
}

export default App;
