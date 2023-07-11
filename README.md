# Projeto Full Stack
Este é um projeto Full Stack que consiste em um aplicativo web desenvolvido com o framework Spring no back-end e React com Vite no front-end. Este projeto tem como funcionalidade gerenciar o processo de contratação de candidatos. A API oferece endpoints para iniciar o processo de contratação, agendar, desqualificar e aprovar candidatos, bem como obter o status de um candidato e listar os candidatos aprovados.

## Configuração
### Back-end
O back-end do projeto foi desenvolvido utilizando o Spring Framework e está configurado para rodar na porta 8080 com o seguinte endpoint: <http://localhost:8080/api/v1/hiring.>

### Front-end
O front-end do projeto foi desenvolvido utilizando o React com Vite. Siga as etapas abaixo para configurar e executar o front-end:

- Navegue até a pasta do front-end: cd frontend/.
- Certifique-se de ter o Node.js e o npm instalados em sua máquina.
- Instale as dependências do projeto: 
~~~~
npm install.
~~~~
- Inicie o servidor de desenvolvimento:
~~~~
npm run dev.
~~~~ 
- Após a compilação bem-sucedida, o aplicativo estará disponível em <http://localhost:5173>

### Endpoints disponíveis:

- POST http://localhost:8080/api/v1/hiring/start inicia um candidato com o nome fornecido pelo usuário, ele retorna o id que foi gerado.
- POST http://localhost:8080/api/v1/hiring/schedule muda o status para "Qualificado" do candidato referente o codCandidato fornecido pelo usuário.
- POST http://localhost:8080/api/v1/hiring/disqualify desqualifica e exclui o candidato referente o codCandidato fornecido pelo usuário.
- POST http://localhost:8080/api/v1/hiring/aprove muda o status para "Aprovado" do candidato referente o codCandidato fornecido pelo usuário.
- GET http://localhost:8080/api/v1/hiring/status/candidate/{codCandidato} retorna o status do candidato com o código especificado.
- GET http://localhost:8080/api/v1/hiring/approved retorna lista de candidatos aprovados.
