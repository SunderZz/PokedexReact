import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./pokeball-png-45332.png";
import "./font.css";
import Menu from "./Menu";
// #fe1b00 Code red Pokemon
function ContainerInsideExample() {
  return (
    <Navbar fixed="top" variant="light" style={{ backgroundColor: "#fe1b00" }}>
      {" "}
      <div className="d-flex align-items-center">
        <img
          src={Logo}
          style={{ width: "30px", marginRight: "10px" }}
          alt="Logo de mon entreprise"
        />
        <Navbar.Brand style={{ fontSize: "2rem", fontFamily: "Police" }}>
          Pokétionnaire
        </Navbar.Brand>
      </div>
      <Container></Container>
      <Menu></Menu>
    </Navbar>
  );
}

export default ContainerInsideExample;
