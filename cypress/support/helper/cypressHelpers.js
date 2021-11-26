Cypress.Commands.add("clearLocalStorageAndCookies", () => {
    cy.clearLocalStorage({log: false})
    cy.clearCookies({log: false})
})

Cypress.Commands.add("clearLocalStorageAndCookies", () => {
    cy.clearLocalStorage({log: false})
    cy.clearCookies({log: false})
})


Cypress.Commands.add("enterText", (text, textFieldSelector) => {
    cy.get(textFieldSelector, {timeout: Cypress.timeout.medium})
        .should("be.visible")
        .type(text)
    cy.get(textFieldSelector, {timeout: Cypress.timeout.medium})
        .should("exist")
        .should("have.attr", "value", text)
})

Cypress.Commands.add("enterTextAndSelectInDropdown", (textFieldSelector, dropdownSelector, text) => {
    cy.get(textFieldSelector)
        .type(text)
        .contains(text, {timeout: Cypress.timeout.large})
    cy.get(dropdownSelector).click()
})


Cypress.Commands.add("clickByContains", (textSelector, text, selectedTimeout) => {
    cy.contains(textSelector, text, {timeout: selectedTimeout})
        .should("be.visible")
        .click({animationDistanceThreshold: 1})
})
