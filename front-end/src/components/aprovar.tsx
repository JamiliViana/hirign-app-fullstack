import React, { useState } from 'react';
import axios from 'axios';

const AprovarCandidato: React.FC = () => {
    const [codCandidato, setCodCandidato] = useState<number | null>(null);
    const [error, setError] = useState('');
    const [aprovado, setAprovado] = useState(false);

    const handleAprovarCandidato = () => {
        if (codCandidato) {
            axios
                .post('http://localhost:8080/api/v1/hiring/approve', { codCandidato })
                .then(() => {
                    setError('');
                    setAprovado(true);
                    console.log(`Candidato ${codCandidato} foi aprovado!`);
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
            <h1>Aprovar Candidato</h1>
            <input
                type="number"
                placeholder="Digite o código do candidato"
                value={codCandidato || ''}
                onChange={e => setCodCandidato(parseInt(e.target.value))}
            />
            <button onClick={handleAprovarCandidato} disabled={!codCandidato}>
                Aprovar Candidato
            </button>
            {aprovado && (
                <p>Candidato {codCandidato} foi aprovado!</p>
            )}
            {error && <p>Erro: {error}</p>}
        </div>
    );
};

export default AprovarCandidato;
