import Header from "./components/globals/header/Header";
import Footer from "./components/globals/footer/Footer";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
