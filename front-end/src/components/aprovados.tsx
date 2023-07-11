import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Aprovados: React.FC = () => {
    const [aprovados, setAprovados] = useState<any[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios
            .get('http://localhost:8080/api/v1/hiring/approved')
            .then((response) => {
                setAprovados(response.data);
                setError('');
            })
            .catch((error) => {
                if (error.response) {
                    setError(error.response.data);
                } else {
                    setError(error.message);
                }
            });
    }, []);

    return (
        <div className='container-lista'>
            <h1>Candidatos Aprovados</h1>
            <ul>
                {aprovados.length > 0 ? (
                    aprovados.map((aprovado) => (
                        <li key={aprovado}>{aprovado}</li>
                    ))
                ) : (
                    <li>Nenhum candidato aprovado encontrado</li>
                )}
            </ul>
        </div>
    );
};

export default Aprovados;