## Backend - Wefit

Seja bem vindo ao teste de backend da Wefit.

### Para iniciar o banco de dados é necessario ter o docker-compose instalado em sua máquina e rodar o seguinte comando:

    docker-compose up -d

O docker-compose vai criar um container de um MySQL e você poderá acessar via localhost:3306 e a senha do usuário **root** é **12345**

### Para iniciar o servidor express basta executar o seguinte comando:

    npm start

ou

    yarn start

Depois que concluir seu teste, não enviar o seu código junto com a pasta data. A pasta data é salvo o volume do MySQL criado pelo docker.

Boa sorte =)
