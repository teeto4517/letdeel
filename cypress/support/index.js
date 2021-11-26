// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// clear cache before suite
before(() => {
    cy.clearLocalStorageAndCookies()
})

// clear cache before each test
beforeEach(() => {
    cy.clearLocalStorageAndCookies()
})

Cypress.timeout = {
    "small": 5000,
    "medium": 30000,
    "large": 60000,
    "xLarge": 120000
}

// deel custom commands
import "./letDeel/commands/contractCommands.js"
import "./letDeel/commands/loginCommands.js"
import "./letDeel/commands/navigationCommands.js"


// deel custom steps
import "./letDeel/steps/loginSteps.js"
import "./letDeel/steps/contractSteps.js"

// helpers
import "./helper/cypressHelpers.js"
import "./helper/letDeelHelper.js"

// selectors
Cypress.selectors = require("../support/selectors.js")
