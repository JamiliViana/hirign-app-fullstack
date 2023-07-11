import React, { useState } from 'react';
import axios from 'axios';

const IniciarProcesso: React.FC = () => {
    const [nome, setNome] = useState('');
    const [codCandidato, setCodCandidato] = useState<number | null>(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNome(event.target.value);
    };

    const handleIniciarProcesso = () => {
        axios
            .post('http://localhost:8080/api/v1/hiring/start', { nome })
            .then((response) => {
                setCodCandidato(response.data);
                setErrorMessage('');
            })
            .catch((error) => {
                if (error.response) {
                    setErrorMessage(error.response.data);
                } else {
                    setErrorMessage(error.message);
                }
                setCodCandidato(null);
            });
    };

    return (
        <div>
            <h1>Iniciar Processo</h1>
            <div>
                <label>Nome:</label>
                <input type="text" value={nome} onChange={handleInputChange} />
            </div>
            <button onClick={handleIniciarProcesso}>Iniciar</button>
            {codCandidato !== null && (
                <p>Código do Candidato: {codCandidato}</p>
            )}
            {errorMessage && (
                <p>Erro: {errorMessage}</p>
            )}
        </div>
    );
};

export default IniciarProcesso;
