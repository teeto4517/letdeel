Cypress.Commands.add("visitLetDeelAndLoginAsAClient", () => {
    cy.visitLetDeel()
    cy.enterEmail()
    cy.enterPassword()
    cy.clickLogin()
    cy.closeModal()
})