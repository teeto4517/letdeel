Cypress.Commands.add("clickLetDeelNav", (menuOption) => {
    const allOptions = {
        "home" : Cypress.selectors.navHome,
        "createContract" : Cypress.selectors.navCreateContract,
        "contracts" : Cypress.selectors.navContracts,
        "reports" : Cypress.selectors.navReports,
        "documents" : Cypress.selectors.navCompDoc,
        "invoice" : Cypress.selectors.navInvAndReceipts,
        "taxes" : Cypress.selectors.navTaxes,
        "settings" : Cypress.selectors.navTeamSettings,
        "perks" : Cypress.selectors.navPerks
    }
    cy.get(allOptions[menuOption]).click({multiple: true})
})

Cypress.Commands.add("verifyHrefOfNavigationElements", (page) => {
    const navOptions = {
        "home" : {
            "selector" : Cypress.selectors.navHome,
            "expected" : "/"
        },
        "createContract" : {
            "selector" : Cypress.selectors.navCreateContract,
            "expected" : "/create"
        },
        "contracts": {
            "selector" : Cypress.selectors.navCreateContract,
            "expected" : "/contracts"
        },
        "report" : {
            "selector" : Cypress.selectors.navReports,
            "expected" : "/reports"
        },
        "documents" : {
            "selector" : Cypress.selectors.navCompDoc,
            "expected" : "/compliance-documents"
        },
        "invoice" : {
            "selector" : Cypress.selectors.navInvAndReceipts,
            "expected" : "/invoices"
        },
        "taxes" : {
            "selector" : Cypress.selectors.navTaxes,
            "expected" : "/taxes"
        },
        "settings" : {
            "selector" : Cypress.selectors.navTeamSettings,
            "expected" : "/team-settings"
        },
        "perks" : {
            "selector" : Cypress.selectors.navPerks,
            "expected" : "/perks"
        }
    }
    cy.get(navOptions[page].selector).should("have.attr", "href", navOptions[page].expected)
})