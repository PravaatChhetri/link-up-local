import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Navbar from "./components/Navbar";
import AddListing from "./pages/AddListing";
import SearchedPage from "./pages/SearchedPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/add-listing"
          element={
            <Layout>
              <AddListing />
            </Layout>
          }
        />
        <Route
          path="/searched"
          element={
            <Layout>
              <SearchedPage />
            </Layout>
          }
        />

        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const Layout = ({ children }) => {
  return <Navbar>{children}</Navbar>;
};
