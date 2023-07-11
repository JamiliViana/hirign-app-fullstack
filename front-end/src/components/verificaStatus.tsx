import React, { useState } from 'react';
import axios from 'axios';

const VerificarStatus: React.FC = () => {
    const [codCandidato, setCodCandidato] = useState<number | null>(null);
    const [error, setError] = useState('');
    const [status, setStatus] = useState('');

    const handleVerificaStatus = () => {
        if (codCandidato) {
            axios
                .get(`http://localhost:8080/api/v1/hiring/status/candidate/${codCandidato}`)
                .then((response) => {
                    setStatus(response.data);
                    setError('');
                })
                .catch((error) => {
                    if (error.response) {
                        setError(error.response.data);
                    } else {
                        setError(error.message);
                    }
                    setCodCandidato(null);
                });
        }
    };

    return (
        <div>
            <h1>Status Candidato</h1>
            <input
                type="number"
                placeholder="Digite o código do candidato"
                value={codCandidato || ''}
                onChange={e => setCodCandidato(parseInt(e.target.value))}
            />
            <button onClick={handleVerificaStatus} disabled={!codCandidato}>
                Verificar Candidato
            </button>
            {status && (
                <p>Status do candidato {codCandidato} é {status}</p>
            )}
            {error && <p>Erro: {error}</p>}
        </div>
    );
};

export default VerificarStatus;
