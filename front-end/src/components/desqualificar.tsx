import React, { useState } from 'react';
import axios from 'axios';

const DesqualificarCandidato: React.FC = () => {
    const [codCandidato, setCodCandidato] = useState<number | null>(null);
    const [error, setError] = useState('');
    const [desqualificado, setDesqualificado] = useState(false);

    const handleDesqualificarCandidato = () => {
        if (codCandidato) {
            axios
                .post('http://localhost:8080/api/v1/hiring/disqualify', { codCandidato })
                .then(() => {
                    setError('');
                    setDesqualificado(true);
                    console.log(`Candidato ${codCandidato} foi desqualificado!`);
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
            <h1>Desqualificar Candidato</h1>
            <input
                type="number"
                placeholder="Digite o código do candidato"
                value={codCandidato || ''}
                onChange={e => setCodCandidato(parseInt(e.target.value))}
            />
            <button onClick={handleDesqualificarCandidato} disabled={!codCandidato}>
                Desqualificar Candidato
            </button>
            {desqualificado && (
                <p>Candidato {codCandidato} foi desqualificado!</p>
            )}
            {error && <p>Erro: {error}</p>}
        </div>
    );
};

export default DesqualificarCandidato;
