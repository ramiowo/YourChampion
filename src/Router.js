import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import TestPage from "./pages/test/TestPage";
import ResultPage from "./pages/result/ResultPage";
import Header from "./components/Header";

const Router = () => {
  const location = useLocation();
  const hiddenHeader = ["/"];
  const showHeader = !hiddenHeader.includes(location.pathname);
  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </>
  );
};

export default Router;
