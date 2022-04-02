describe('TBL Website', () => {
    it('TBL Home Page', () => {

        //visit TBL Home page. Root path defined in cypress.json
        cy.visit("/")

        //Verify an image exist with alt text "Tugboat Logic"
        cy
          .get('img')
          .invoke('attr', 'alt')
          .should('eq', 'Tugboat Logic')
    })
  })


  