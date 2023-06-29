import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Modale() {
  const [showModal, setShowModal] = useState(false);
  //Open Modal at loading
  useEffect(() => {
    setShowModal(true);
  }, []);
  // close it
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>For cellphone users</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Type an ID "Number", to found a Pokemon on cellphone
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modale;
