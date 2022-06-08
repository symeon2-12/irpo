import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Pictures from "./pages/Pictures";
import Setup from "./pages/Setup";
import Missing from "./pages/Missing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/irpo" element={<Pictures />} />
          <Route path="/irpo/setup" element={<Setup />} />
          <Route path="/irpo/*" element={<Navigate to="/irpo" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
