import { HashRouter } from "react-router-dom";
import Router from "./Router";
import Header from "./components/Header";

const App = () => {
  return (
    <HashRouter>
      <Router />
    </HashRouter>
  );
};

export default App;
