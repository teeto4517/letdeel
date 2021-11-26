Cypress.Commands.add("generalInformation", () => {
    cy.clickLetDeelNav("createContract")
    cy.clickFixRate()
    cy.inputContractName()
    cy.selectTaxResidence("United States")
    cy.selectState("Colorado")
    cy.enterJobTitle("QA Engineer")
    cy.selectLevel("Senior (Individual Contributor Level 3)")
    cy.selectPredefinedScope()
    cy.selectAPreviousDate()
    cy.clickNext()
})

Cypress.Commands.add("paymentDetails", () => {
    cy.selectCurrency("GBP")
    cy.inputRate(1000)
    cy.selectCycle("Weekly")
    cy.clickNext()
})

Cypress.Commands.add("defineDates", () => {
    cy.selectFirstPaymentDate("Dec 12th, 2021")
    cy.inputProRataAmount(300)
    cy.clickNext()
})

Cypress.Commands.add("compliance", () => {
    cy.clickandInputTerminationDate(6)
    cy.clickSubmit()
    cy.clickCreate()
    cy.verifyContractName()
})
