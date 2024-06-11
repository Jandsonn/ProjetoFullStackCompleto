# ProjetoFullStackCompleto
Um projeto criado com nodejs, html, css , handlebars, que também é executado com a técnologia docker. 

para executar o projeto será preciso ter o docker-compose instalado e também o docker, caso seja necessário a utilização ou sua escolha própria de utilizar ou não
o docker para a execução deste projeto. Mas em caso de dúvidas tem como ver mais detalhes seguindo a documentação em: https://docs.docker.com/engine/reference/commandline/start/  .
este projeto é um exemplo de lógico, como o twitter, você digita o que pensa ele vem com um método get pega as informações e tem os posts, que é público, 
após isso bem antes de pública algo será necessário criar um cadastro e após o cadastro esse usuário pode criar seus pensamentos e postar, apenas o usuário logado na sessão tem
as pesmissões de editar e excluir seus próprios posts. O projeto entrega sim essas resposabilidades de postas editar as públicações, criar usuário
e valida o login desses usuários.

"Jandson você fez esse projeto por quê?"
Para por em práticas os meus conhecimentos em relação ao front-end e back-end, utilizando as seguintes tecnologias: nodejs, handlebars, HTML,CSS,JAVASCRIPT,DOCKER-COMPOSE . 

How to running program!

Para executar o programa será preciso verificar ou instalar o docker e docker-compose
após ter o docker-compose em sua máquina basta usar os seguintes comandos:

( docker-compose up ) Para subir aplicação, esses comandos devem ser executados direto no diretório onde está localizado o docker-compose ou na raiz do seu projeto.

Após a execução do programa aguarde até que o terminei mostre os logs que foram executados, para verificar se ocorreu tudo corretamente.
Após a executação do docker-compose, verifique os status do seu container. Usando o comando: docker ps.
Esse comando listará os containers que têm em execução e que estão sendo executados.  Se usarmos o comando: docker ps -a   
Esse comando verifica se existem containers parados e em status stop. Logo podemos combinar os seguintes comandos juntos:
docker ps && docker ps -a  Esses comandos como explicado anteriormente fazem uma lista de containers que estão em modo stop, ou em execução. 

Caso tenha ocasionado algum erro durante a execução da aplicação, verifique se os arquivos estão sendo executados como root um comando. Pois é essencial para que o programa execute com prioridades. 

Após chegar até aqui, acredito que você tenha executado o projeto corretamente. Lembre sempre de deixar as bibliotecas padrões como versões padrões para que não ocorra erro na execução do projeto. 


