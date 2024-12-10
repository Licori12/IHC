import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Bem-vindo ao CNUPD</h1>
      <p>Bem-vindo ao sistema de Cadastro Nacional de Pessoas Desaparecidas.</p>
      <nav>
        <Link to="/about"><button>Sobre</button></Link>
        <Link to="/register"><button>Cadastro</button></Link>
        <Link to="/consult"><button>Consulta</button></Link>
        <Link to="/contact"><button>Contato</button></Link>
      </nav>
    </div>
  );
}

export default Home;
