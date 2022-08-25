# Aplicação Cypress para artigo

Repositório com testes automatizados para WEB utilizando o framework: Cypress

> Testando e validando sistema WEB com
[Cypress](https://www.cypress.io/)

## Índice

- [Pré-requisitos](#pre-requisitos)
- [Configuração](#configuracao)
- [Instalação](#instalacao)


---

## <a id="pre-requisitos"></a>Pré-requisitos

- [Ter o node LTS](https://nodejs.org/en/download/)
- [Ter o allure-commandline](https://www.npmjs.com/package/allure-commandline)
- [Ter o VSCode ou outra IDE](https://code.visualstudio.com/download)

## <a id="configuracao"></a>Configuração

##### Instalação do Node
- Windows, Linux e Mac: https://www.freecodecamp.org/news/how-to-install-node-in-your-machines-macos-linux-windows/

##### Instalação do allure-commandline
- Windows, Linux e Mac: https://github.com/allure-framework/allure-npm#readme

Use o arquivo requirements.txt já criado para baixar/instalar a dependência

## <a id="instalacao"></a>Instalação

> Clonar o projeto

- Clone este repositório para sua máquina local usando http ou ssh, por exemplo:

`git clone git@github.com:EricCabralNeder/Aplicacao_Artigo_Cypress.git`

- Instale todas as dependências (requirements.txt) utilizando npm:

`cd /Aplicacao_Artigo_Cypress`

`npm install -D`

![Baixe as dependências via npm](https://verdaccio.org/pt-BR/assets/images/npm_install-16c1331c7b4bd69e473e02f27b9b9619.gif)

> Notas

- Comando para ver os reports gerados para o allure `allure serve` (comando deve ser rodado na pasta raiz do projeto)
