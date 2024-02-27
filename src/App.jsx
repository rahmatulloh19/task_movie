import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { GlobalStyles } from "./Globalstyles";

function App() {
  return (
    <>
      <Header />
      <Outlet />

      <GlobalStyles />
    </>
  );
}

export default App;
