import React, { useState } from 'react';
import IniciarProcesso from './components/iniciarprocesso';
import MarcarEntrevista from './components/marcarEntrevista';
import './App.css';
import DesqualificarCandidato from './components/desqualificar';
import AprovarCandidato from './components/aprovar';
import VerificarStatus from './components/verificaStatus';
import Aprovados from './components/aprovados';

const App: React.FC = () => {
  const [componenteAtivo, setComponenteAtivo] = useState<string | null>(null);

  const exibirIniciarProcesso = () => {
    setComponenteAtivo('iniciarProcesso');
  };

  const exibirMarcarEntrevista = () => {
    setComponenteAtivo('marcarEntrevista');
  };

  const exibirDesqualificarCandidato = () => {
    setComponenteAtivo('desqualificar');
  };

  const exibirAprovarCandidato = () => {
    setComponenteAtivo('aprovar');
  };

  const exibirVerificarStatus = () => {
    setComponenteAtivo('verificarStatus');
  };

  const exibirAprovados = () => {
    setComponenteAtivo('aprovados');
  };

  return (
    <div className="container">
      <h1>Aplicação para RH</h1>
      <div className="buttons">
        <button onClick={exibirIniciarProcesso}>Iniciar Processo</button>
        <button onClick={exibirMarcarEntrevista}>Marcar Entrevista</button>
        <button onClick={exibirDesqualificarCandidato}>Desqualificar Candidato</button>
        <button onClick={exibirAprovarCandidato}>Aprovar Candidato</button>
        <button onClick={exibirVerificarStatus}>Verificar Candidato</button>
        <button onClick={exibirAprovados}>Aprovados</button>
      </div>

      {componenteAtivo === 'iniciarProcesso' && <IniciarProcesso />}
      {componenteAtivo === 'marcarEntrevista' && <MarcarEntrevista />}
      {componenteAtivo === 'desqualificar' && <DesqualificarCandidato />}
      {componenteAtivo === 'aprovar' && <AprovarCandidato />}
      {componenteAtivo === 'verificarStatus' && <VerificarStatus />}
      {componenteAtivo === 'aprovados' && <Aprovados />}
    </div>
  );
};

export default App;
