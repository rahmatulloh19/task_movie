import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { GlobalStyles } from "./Globalstyles";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>

      <GlobalStyles />
    </>
  );
}

export default App;
