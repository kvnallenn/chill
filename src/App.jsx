import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormLogin from "./components/FormLogin";
import FormRegister from "./components/FormRegister";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<FormLogin />} />
          <Route path="/register" element={<FormRegister />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
