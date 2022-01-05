import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/about");
  }, 2000);
  return (
    <div className="container">
      <h4 className="center">Contact</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
        consequuntur quia laborum quibusdam cum, blanditiis laudantium
        doloremque odio amet harum dolor nihil fugit id omnis saepe! Iure
        consectetur quasi commodi.
      </p>
    </div>
  );
};

export default Contact;
