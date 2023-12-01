//<reference types="Cypress"/>

describe('Cenário 4', function () {

    beforeEach(function () {
        cy.visit('https://hotel-ienh.000webhostapp.com/sign-in.php')
        cy.get('body > div.container.mt-5 > div > div > div > div.card-body > form > div:nth-child(1) > input').type('testet@teste.com.br')
        cy.get('body > div.container.mt-5 > div > div > div > div.card-body > form > div:nth-child(2) > input').type('123456')
        cy.get('body > div.container.mt-5 > div > div > div > div.card-body > form > button').click()
    }
    )

    it('Fazer Reserva', function () {
        cy.get('body > section > div:nth-child(2) > div > div.col-md-6.p-5.order-md-1 > a').click()
        cy.get('#destaque > div > div.row > div:nth-child(1) > div > form > button').click()
        cy.get('#destaque > div > div > form > div:nth-child(2) > input').type('2023-11-29')
        cy.get('#destaque > div > div > form > div:nth-child(3) > input').type('2023-11-30')
        cy.get('#destaque > div > div > form > div:nth-child(4) > input').type('1')
        cy.get('#destaque > div > div > form > button').click()
    }
    )
})
