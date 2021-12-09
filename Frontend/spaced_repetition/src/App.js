import FrontPage from "./components/frontPage/frontPage";
import QuestionPage from "./components/questionPage/questionPage";

import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/question/:id" element={<QuestionPage />}></Route>
          <Route path="/" element={<FrontPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
