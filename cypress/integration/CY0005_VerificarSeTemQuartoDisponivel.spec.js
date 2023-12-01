//<reference types="Cypress"/>

describe('Cenário 5', function () {

    beforeEach(function () {
        cy.visit('https://hotel-ienh.000webhostapp.com/index.php')
    }
    )

    it('Verificar Quartos', function () {
        cy.get('body > section > div:nth-child(2) > div > div.col-md-6.p-5.order-md-1 > a').click()
        cy.get('#destaque > div > div.row > div:nth-child(1) > div').contains('teste2')
    }
    )
})
