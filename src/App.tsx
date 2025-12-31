import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./components/GlobalStyles";
import { publicRoutes } from "./routes";

function App() {
  return (
    <GlobalStyles>
      <BrowserRouter>
        <h1>Toptop</h1>
        <Routes>
          {publicRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} Component={Component} />
          ))}
        </Routes>
      </BrowserRouter>
    </GlobalStyles>
  );
}

export default App;
