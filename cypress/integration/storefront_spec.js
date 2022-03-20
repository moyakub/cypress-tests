describe('Login to store', () => {
    it('login', () => {
        //cy.visit('https://yakuwpg1.mybigcommerce.com/')
        cy.visit("/")
        cy.get("#password").type(Cypress.env('storefront_password'))
        cy.get("[type='submit']").click()
        
      //expect(true).to.equal(true)
    })
  })


  