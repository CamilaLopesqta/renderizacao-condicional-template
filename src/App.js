import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaPrincipal from "./components/TelaPrincipal/TelaPrincipal.js";
import { useState } from "react";

const GlobalStyled = createGlobalStyle`
  html {
    font-family: sans-serif9;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;
const MainContainer = styled.main`
  height: 100vh;
`;

function App() {
  const [tela, setTela] = useState("login");

  const alterarTela = (screen) => {
    setTela(screen);
  };

  return (
    <MainContainer>
      <GlobalStyled />
      {tela === "login" && <TelaLogin alterarTela={alterarTela} />}
      {tela === "cadastro" && <TelaCadastro alterarTela={alterarTela} />}
      {tela === "principal" && <TelaPrincipal alterarTela={alterarTela} />}
    </MainContainer>
  );
}

export default App;
