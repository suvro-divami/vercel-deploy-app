import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import FallBack from "./Pages/FallBack";
import IndexPage from "./Pages/IndexPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<FallBack />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
