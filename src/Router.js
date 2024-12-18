import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import TestPage from "./test/TestPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<TestPage />} />
    </Routes>
  );
};

export default Router;
