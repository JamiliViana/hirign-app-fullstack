# Projeto Full Stack
Este é um projeto Full Stack que consiste em um aplicativo web desenvolvido com o framework Spring no back-end e React com Vite no front-end. Este projeto tem como funcionalidade gerenciar o processo de contratação de candidatos. A API oferece endpoints para iniciar o processo de contratação, agendar, desqualificar e aprovar candidatos, bem como obter o status de um candidato e listar os candidatos aprovados.

## Executando o Projeto
### Back-end
- Certifique-se de ter o Java JDK e o Maven instalados.
- Navegue para o diretório "back-end" no terminal.
- Execute o seguinte comando para iniciar o servidor Spring Boot:
~~~~bash
mvn spring-boot:run
~~~~

### Front-end
- Certifique-se de ter o Node.js instalado.
- Navegue para o diretório "front-end" no terminal.
- Instale as dependências do projeto: 
~~~~bash
npm install.
~~~~
- Inicie o servidor de desenvolvimento:
~~~~bash
npm run dev.
~~~~ 
- Após a compilação bem-sucedida, o aplicativo estará disponível em <http://localhost:5173>


## Funcionalidades
O front-end oferece uma interface de usuário intuitiva para interagir com a API:

### Iniciar Processo
<img src="https://github.com/JamiliViana/hirign-app-fullstack/assets/81647984/23d4d874-09d7-4423-9ecc-66e5413cd570" alt="iniciar" width="600"/>    

- Ao clicar no botão "Iniciar Processo", você envia o nome do candidato.

### Marcar Entrevista
<img src="https://github.com/JamiliViana/hirign-app-fullstack/assets/81647984/b5fff89a-9e04-44f4-b770-494256fc9901" alt="marcar" width="600"/>    

- Ao clicar no botão "Marcar Entrevista", você pode inserir o código do candidato.

### Desqualificar Candidato
<img src="https://github.com/JamiliViana/hirign-app-fullstack/assets/81647984/3e4f8fbe-250c-449c-896c-66fc2c014804" alt="desqualificar" width="600"/>    

- Ao clicar no botão "Desqualificar Candidato", você pode inserir o código do candidato.

### Aprovar Candidato
<img src="https://github.com/JamiliViana/hirign-app-fullstack/assets/81647984/d173bde0-7e9f-49a8-beba-6890f7e0fd36" alt="aprovar" width="600"/>    

- Ao clicar no botão "Aprovar Candidato", você pode inserir o código do candidato.

### Verificar Status
<img src="https://github.com/JamiliViana/hirign-app-fullstack/assets/81647984/9b17cbdc-9fe6-4f56-8a1e-53e735a1c193" alt="status" width="600"/>    

- Ao clicar no botão "Verificar Candidato", você pode inserir o código do candidato.

### Candidatos Aprovados
<img src="https://github.com/JamiliViana/hirign-app-fullstack/assets/81647984/b76a6efe-0502-47e7-94fb-fda15da50bcd" alt="lista" width="600"/>    

- Ao clicar no botão "Aprovados", você verá a lista de candidatos aprovados.

