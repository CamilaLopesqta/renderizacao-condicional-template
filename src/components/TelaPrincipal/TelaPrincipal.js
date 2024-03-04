import { Div, Titulo } from "./styled";
import { useState } from "react";

function TelaPrincipal(props) {
  const deslogar = () => {
    // validação de logout ainda será visto mais pra frente no curso
    alert(
      "Sessão encerrada com sucesso, mas falta fazer a prática 3 e remover esse alerta"
    );
  };

  return (
    <Div>
      <Titulo>Tela Principal</Titulo>
      <p>Boas-vindas à aplicação!</p>
      <button
        onClick={() => {
          props.alterarTela("login");
        }}
      >
        Deslogar
      </button>
    </Div>
  );
}

export default TelaPrincipal;
