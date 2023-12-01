//<reference types="Cypress"/>

describe('Cenário 1', function () {

    beforeEach(function () {
        cy.visit('Https://hotel-ienh.000webhostapp.com')
    }
    )

    it('Fazer Login', function () {
        cy.get('#navbarNav > ul > li:nth-child(4) > a').click()
        cy.get('body > div.container.mt-5 > div > div > div > div.card-body > form > div:nth-child(1) > input').type('testet@teste.com.br')
        cy.get('body > div.container.mt-5 > div > div > div > div.card-body > form > div:nth-child(2) > input').type('123456')
        cy.get('body > div.container.mt-5 > div > div > div > div.card-body > form > button').click()
    }
    )

})
