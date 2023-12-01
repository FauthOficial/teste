//<reference types="Cypress"/>

describe('Cenário 3', function () {

    beforeEach(function () {
        cy.visit('https://hotel-ienh.000webhostapp.com/index.php')
    }
    )

    it('Registrar', function () {
        cy.get('#navbarNav > ul > li:nth-child(5) > a').click()
        cy.get('body > div.container.mt-5 > div > div > div > div.card-body > form > div:nth-child(1) > input').type('Nomeezinho')
        cy.get('body > div.container.mt-5 > div > div > div > div.card-body > form > div:nth-child(2) > input').type('nomesssss@gmail.com')
        cy.get('#senha').type('123456677')
        cy.get('body > div.container.mt-5 > div > div > div > div.card-body > form > button').click()
    }
    )
})
