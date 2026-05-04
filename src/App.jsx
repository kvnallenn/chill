import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormLogin from "./components/FormLogin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<h1>Home</h1>} />
          <Route path="/" element={<FormLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
