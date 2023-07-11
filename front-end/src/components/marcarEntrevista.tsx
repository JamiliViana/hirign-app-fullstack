import React, { useState } from 'react';
import axios from 'axios';

const MarcarEntrevista: React.FC = () => {
    const [codCandidato, setCodCandidato] = useState<number | null>(null);
    const [error, setError] = useState('');
    const [qualificado, setQualificado] = useState(false);

    const handleMarcarEntrevista = () => {
        if (codCandidato) {
            axios
                .post('http://localhost:8080/api/v1/hiring/schedule', { codCandidato })
                .then(() => {
                    setError('');
                    setQualificado(true);
                    console.log('Entrevista marcada com sucesso!');
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
            <h1>Marcar Entrevista</h1>
            <input
                type="number"
                placeholder="Digite o código do candidato"
                value={codCandidato || ''}
                onChange={(e) => setCodCandidato(parseInt(e.target.value))}
            />
            <button onClick={handleMarcarEntrevista}>Marcar Entrevista</button>
            {qualificado && (
                <p>
                    Entrevista marcada! Candidato {codCandidato} está qualificado.
                </p>
            )}
            {error && <p>Erro: {error}</p>}
        </div>
    );
};

export default MarcarEntrevista;
