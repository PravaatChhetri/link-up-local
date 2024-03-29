import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Navbar from "./components/Navbar";
import AddListing from "./pages/AddListing";
import SearchedPage from "./pages/SearchedPage";
import { ShopProvider } from "./contexts/ShopContexts";

export default function App() {
  return (
    <BrowserRouter>
      <ShopProvider>
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
      </ShopProvider>
    </BrowserRouter>
  );
}

const Layout = ({ children }) => {
  return <Navbar>{children}</Navbar>;
};
