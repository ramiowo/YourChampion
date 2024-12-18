import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import TestPage from "./pages/test/TestPage";
import ResultPage from "./pages/result/ResultPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
};

export default Router;
