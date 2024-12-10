import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    city: "",
    description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Cadastro realizado: ${JSON.stringify(formData)}`);
  };

  return (
    <div>
      <h1>Cadastro de Pessoas Desaparecidas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Idade"
          value={formData.age}
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          placeholder="Cidade"
          value={formData.city}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Descrição"
          value={formData.description}
          onChange={handleChange}
        />
        <button type="submit">Cadastrar</button>
      </form>
      <Link to="/"><button>Voltar para Home</button></Link>
    </div>
  );
}

export default Register;
