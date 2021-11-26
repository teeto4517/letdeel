const dayjs = require("dayjs");
cy.faker = require("faker")
const contractName = cy.faker.company.companyName()

Cypress.Commands.add("clickFixRate", () => {
    cy.get(Cypress.selectors.fixedRate).click()
})

Cypress.Commands.add("inputContractName", () => {
    cy.get(Cypress.selectors.contractName, {timeout : Cypress.timeout.large}).type(contractName)
})

Cypress.Commands.add("enterJobTitle", ( title) => {
    cy.get(Cypress.selectors.jobTitle)
        .type(title)
    cy.get(Cypress.selectors.suggestionOption).click()
})

Cypress.Commands.add("selectLevel", (level) => {
    cy.enterTextAndSelectInDropdown(Cypress.selectors.seniorityLevel, Cypress.selectors.level, level)
})

Cypress.Commands.add("selectPredefinedScope", () => {
    cy.get(Cypress.selectors.predefineScope).click()
    cy.get(Cypress.selectors.qa).click()
})

Cypress.Commands.add("selectTaxResidence",(country) => {
    cy.enterTextAndSelectInDropdown(Cypress.selectors.taxResidence, Cypress.selectors.selectorContainer, country)
})

Cypress.Commands.add("selectAPreviousDate", () => {
    const dateNow = dayjs().format('DD') - 1
    cy.get(Cypress.selectors.calenderInput).click()
    cy.get(`:nth-child(${dateNow}) > abbr`).click()
})

Cypress.Commands.add("selectState", (state) => {
    cy.enterTextAndSelectInDropdown(Cypress.selectors.state, Cypress.selectors.selectedState, state)

})

Cypress.Commands.add("clickNext", () => {
    cy.get(Cypress.selectors.next).should("be.visible").click({force: true})
})

Cypress.Commands.add("selectCurrency", (currency) => {
    cy.enterTextAndSelectInDropdown(Cypress.selectors.currency, Cypress.selectors.selectorContainer, currency)
})

Cypress.Commands.add("inputRate", (amount) => {
    cy.get(Cypress.selectors.rate).type(amount)
})

Cypress.Commands.add("selectCycle", (frequency) => {
    cy.enterTextAndSelectInDropdown(Cypress.selectors.cycle, "#react-select-7-option-0", frequency)
})

Cypress.Commands.add("selectFirstPaymentDate", (date) => {
    cy.enterTextAndSelectInDropdown(Cypress.selectors.firstPaymentDate, "#react-select-11-option-2", date)
    cy.get(Cypress.selectors.proRata).click()

})

Cypress.Commands.add("inputProRataAmount", (amount) => {
    cy.get(Cypress.selectors.proRataAmount).type(amount)
})

Cypress.Commands.add("clickandInputTerminationDate", (numbOfMonths) => {
    cy.contains("add a termination date").should("be.visible").click()
    cy.get(Cypress.selectors.terminationCalender).click()
    for (let i = 0; i < numbOfMonths; i++) {
        cy.get(".react-calendar__navigation__next-button").click()
    }
    cy.get(`:nth-child(23) > abbr`).click()
})

Cypress.Commands.add("clickSubmit", () => {
    cy.get(Cypress.selectors.submit).click()
})

Cypress.Commands.add("clickCreate", () => {
    cy.get(Cypress.selectors.create).click()
})

Cypress.Commands.add("verifyContractName", () => {
    cy.get("h1", {timeout : Cypress.timeout.large}).should("contain.text", contractName)
})

