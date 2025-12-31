import { Route, Routes } from "react-router-dom";
import { considerLayout, privateRoutes, publicRoutes } from "./routes";

function App() {
  return (
    <Routes>
      {publicRoutes.map((route) => {
        const Layout = considerLayout(route.layout);
        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              <Layout>
                <route.component />
              </Layout>
            }
          />
        );
      })}
      {privateRoutes.map((route) => {
        const Layout = considerLayout(route.layout);
        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              // TODO: Add private route check (authentication)
              <Layout>
                <route.component />
              </Layout>
            }
          />
        );
      })}
      <Route path="*" element={<h2>404 Not Found</h2>} />
    </Routes>
  );
}

export default App;
