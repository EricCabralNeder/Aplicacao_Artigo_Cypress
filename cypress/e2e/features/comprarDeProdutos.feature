Feature: Realizar comprar

    Background:
    Scenario: Efetuar comprar com sucesso
        Given que estou na tela de produtos
        When adiciono alguns produtos ao carrinho
        And abro carrinho de compras
        And realizo o checkout
        Then devo conseguir ver a mensagem "THANK YOU FOR YOUR ORDER"