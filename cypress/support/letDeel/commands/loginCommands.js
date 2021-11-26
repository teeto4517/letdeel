Cypress.Commands.add("visitLetDeel", () => {
    cy.visit(cy.letDeel.getLetDeelBaseUrl())
})

Cypress.Commands.add("enterEmail", () => {
    cy.get(Cypress.selectors.email,{timeout: Cypress.timeout.xLarge})
        .should("be.visible")
        .type(Cypress.env("EMAIL"))
})

Cypress.Commands.add("enterPassword", () => {
    cy.get(Cypress.selectors.password)
        .should("be.visible")
        .type(Cypress.env("ACCOUNT_PASSWORD"))
})

Cypress.Commands.add("clickLogin", () => {
    cy.get(Cypress.selectors.loginButton, {timeout: Cypress.timeout.xLarge})
        .should("be.visible")
        .click()
})

Cypress.Commands.add ("closeModal",() => {
    cy.get(Cypress.selectors.popUp,{timeout: Cypress.timeout.xLarge})
        .should("be.visible")
        .click()
})

