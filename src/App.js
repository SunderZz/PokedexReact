import Search from "./components/Search";
import Match1 from "./components/Versus1";
import Match2 from "./components/Versus2";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./components/body.css";
import "./components/font.css";
import Modal from "./components/Notif";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 ">
            <Navbar> </Navbar>
          </div>
        </div>
        <Modal></Modal>
        <div className="row mb-5" style={{ marginTop: "50px" }}>
          <div className="col-md-12 d-flex justify-content-center">
            <Search></Search>
          </div>
        </div>{" "}
        <h1 style={{ fontFamily: "Police" }}>Pokemon Versus</h1>
        <div className="row">
          <div className="col-md-6 mb-3 d-flex justify-content-center">
            <Match1></Match1>
          </div>
          <div className="col-md-6 mb-3 d-flex justify-content-center">
            <Match2></Match2>
          </div>
        </div>{" "}
      </div>{" "}
      <footer className="footer " style={{ position: "relative" }}>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
