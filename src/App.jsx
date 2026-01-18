import React, { useState } from "react";

export default function App() {
  const [turno, setTurno] = useState(1);
  const [energia, setEnergia] = useState(0);

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#0f172a",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial"
    }}>
      <h1>TCG Inspirado</h1>

      <p>Turno atual: {turno}</p>
      <p>Energia: {energia}</p>

      <button
        onClick={() => {
          setTurno(turno + 1);
          setEnergia(energia + 1);
        }}
        style={{
          padding: "10px 20px",
          fontSize: 16,
          borderRadius: 8,
          border: "none",
          backgroundColor: "#22c55e",
          color: "#000",
          cursor: "pointer"
        }}
      >
        Próximo turno
      </button>
    </div>
  );
}
