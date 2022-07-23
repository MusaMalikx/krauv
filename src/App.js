import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Finish from "./pages/register/Finish";
import Register1 from "./pages/register/Step2";
import Register2 from "./pages/register/Step3";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap";

const App = () => {
  const [darkTheme, setTheme] = useState(false);

  useEffect(() => {
    if (darkTheme === true) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkTheme]);

  return (
    <BrowserRouter>
      <div className="bg-[#fff] dark:bg-black">
        <Routes>
          <Route path="/">
            <Route
              index
              element={<Home setTheme={setTheme} theme={darkTheme} />}
            />
            <Route path="dashboard">
              <Route index element={<Dashboard />} />
              <Route
                path="login"
                element={<Login setTheme={setTheme} theme={darkTheme} />}
              />
              <Route
                path="register/step/2"
                element={<Register1 setTheme={setTheme} theme={darkTheme} />}
              />
              <Route
                path="register/step/3"
                element={<Register2 setTheme={setTheme} theme={darkTheme} />}
              />
               <Route
                path="register/finish"
                element={<Finish setTheme={setTheme} theme={darkTheme} />}
              />
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
