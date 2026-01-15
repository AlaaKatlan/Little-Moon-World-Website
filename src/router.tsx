import Footer from "./components/layout/footer";
import Home from "./pages/home";
import NavBar from "./components/layout/header";
import Products from "./pages/products";
import { createBrowserRouter } from "react-router-dom";
import PolicyPage from "./pages/PolicyPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "products",
    element: (
      <>
        <NavBar /> <Products /> <Footer />
      </>
    ),
  },
   {
        path: "policies", // هذا هو الرابط الجديد لصفحة السياسات
           element: (
      <>
        <NavBar /> <PolicyPage /> <Footer />
      </>
    ),
         
      }
]);
