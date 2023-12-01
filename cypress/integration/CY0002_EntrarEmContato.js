//<reference types="Cypress"/>

describe('Cenário 2', function () {

    beforeEach(function () {
        cy.visit('Https://hotel-ienh.000webhostapp.com')
    }
    )

    it('Preencher Formulário', function () {
        cy.get('body > section > div:nth-child(1) > div > div.col-md-6.p-5.order-md-2 > a').click()
        cy.get('body > main > div > div > div > form > div:nth-child(1) > input').type('nome')
        cy.get('body > main > div > div > div > form > div:nth-child(2) > input').type('nome@gmail.com')
        cy.get('body > main > div > div > div > form > div:nth-child(3) > input').type('51998764635')
        cy.get('body > main > div > div > div > form > div:nth-child(4) > input').type('assuntoteste')
        cy.get('body > main > div > div > div > form > div:nth-child(5) > textarea').type('mensagemmmmm')
        cy.get('*[class^="btn btn-primary"]').click()
        }
    )
})
