ProjetoFullStackCompleto

O ProjetoFullStackCompleto é uma aplicação web construída com Node.js, HTML, CSS, Handlebars e Docker. Ele serve como um exemplo de aplicação lógica, semelhante ao Twitter, permitindo que os usuários publiquem "pensamentos" ou posts em uma plataforma pública.

Funcionalidades do Projeto:
Cadastro e Login: Os usuários precisam criar uma conta para acessar o sistema. O login valida as credenciais e mantém os usuários autenticados durante a sessão.
Publicação de Pensamentos: Após o login, os usuários podem criar novos posts e publicá-los. Os posts são públicos e visíveis a todos os usuários.
Edição e Exclusão de Posts: Somente o usuário autenticado tem permissão para editar ou excluir seus próprios posts.
Tecnologias Utilizadas:
Back-end: Node.js
Front-end: Handlebars, HTML, CSS, JavaScript
Docker: Docker Compose para orquestração de containers e execução simplificada
Por que esse projeto foi criado?
Esse projeto foi desenvolvido para colocar em prática os conhecimentos adquiridos em front-end e back-end, utilizando tecnologias como Node.js, Handlebars, HTML, CSS, JavaScript e Docker-Compose. A principal motivação foi aprender a integrar diferentes tecnologias e criar um sistema funcional de gerenciamento de posts com autenticação de usuários.

Como Rodar o Projeto
Para executar o projeto, é necessário ter o Docker e o Docker Compose instalados em sua máquina. Caso precise de ajuda com a instalação, consulte a documentação oficial do Docker aqui.

Passos para Execução:
Verifique se o Docker e o Docker Compose estão instalados:

Caso ainda não tenha o Docker, siga as instruções de instalação aqui.
Para instalar o Docker Compose, siga as instruções aqui.
Suba a Aplicação:

Após instalar o Docker e o Docker Compose, navegue até o diretório onde o projeto está localizado.
Execute o comando abaixo para iniciar a aplicação:
docker-compose up

Este comando irá iniciar todos os containers necessários para a execução do projeto.

Verifique os Logs:

Após a execução do docker-compose up, aguarde até que o processo termine e mostre os logs de execução. Isso ajudará a identificar se ocorreu algum erro durante a inicialização.
Verifique o Status do Container:

Para verificar se os containers estão em execução, use o comando:
docker ps

Este comando lista todos os containers em execução.

Se você deseja verificar também containers que não estão em execução (em status "stop"), utilize:
docker ps -a
Para uma visão completa dos containers, em execução ou parados, execute:
docker ps && docker ps -a
