import React from "react";
import { Link } from "react-router-dom";

function Consult() {
  const sampleData = [
    { id: 1, name: "Maria Silva", age: 25, city: "São Paulo" },
    { id: 2, name: "João Souza", age: 30, city: "Rio de Janeiro" }
  ];

  return (
    <div>
      <h1>Consulta</h1>
      <ul>
        {sampleData.map((person) => (
          <li key={person.id}>
            {person.name}, {person.age} anos, {person.city}
          </li>
        ))}
      </ul>
      <Link to="/"><button>Voltar para Home</button></Link>
    </div>
  );
}

export default Consult;
