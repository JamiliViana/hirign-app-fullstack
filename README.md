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
- Ao clicar no botão "Iniciar Processo", você envia o nome do candidato.

### Marcar Entrevista
- Ao clicar no botão "Marcar Entrevista", você pode inserir o código do candidato.

### Desqualificar Candidato
- Ao clicar no botão "Desqualificar Candidato", você pode inserir o código do candidato.

### Aprovar Candidato
- Ao clicar no botão "Aprovar Candidato", você pode inserir o código do candidato.

### Verificar Status
- Ao clicar no botão "Verificar Candidato", você pode inserir o código do candidato.

### Candidatos Aprovados
- Ao clicar no botão "Aprovados", você verá a lista de candidatos aprovados.

