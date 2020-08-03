import React from "react";
import { Modal } from "react-bootstrap";

// STYLES | STATIC
import "./styles.css";

function InformationModal() {
  return (
    <Modal.Dialog className="informate">
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <button variant="secondary">Close</button>
        <button variant="primary">Save changes</button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default InformationModal;
