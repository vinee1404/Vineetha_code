import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddPlayer from "./components/AddPlayer";
import EditPlayer from "./components/EditPlayer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddPlayer />} />
        <Route path="/edit/:id" element={<EditPlayer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;