import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <h1>Contato</h1>
      <p>Entre em contato conosco para suporte.</p>
      <ul>
        <li>Email: suporte@cnupd.gov.br</li>
        <li>Telefone: 0800-123-456</li>
      </ul>
      <Link to="/"><button>Voltar para Home</button></Link>
    </div>
  );
}

export default Contact;
