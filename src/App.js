import Book from "./components/Book";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import ScrollToTop from "./components/ScrollToTop";
import { useState } from "react";
import AlertCustom from "./components/AlertCustom";
import ModalStart from "./components/ModalStart";

function App() {
  const [alert, setAlert] = useState(false);
  return (
    <div>
      <AlertCustom
        alert={alert}
        setAlert={setAlert}
      />
      <ModalStart />
      <Nav />
      <Header />
      <Book
        alert={alert}
        setAlert={setAlert}
      />
      <Footer />
    </div>
  );
}

export default App;
