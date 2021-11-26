cy.letDeel = {
    getLetDeelBaseUrl: () => {
        const appUrl = {
            url: "https://app.deel.training/"
        }
        const letDeelUrl = appUrl[Cypress.env("ENVIRONMENT")] || Cypress.env("ENVIRONMENT")
        return cy.letDeel.returnUrlUnlessErrorFound(letDeelUrl)
    },

    returnUrlUnlessErrorFound: (theUrl) => {
        const log = Cypress.log({
            name: "environment information",
            displayName: "ENV",
            message: `URL: ${theUrl}`,
            autoEnd: false
        })

        if (theUrl) {
            log.end()
            return theUrl.replace(/\/$/, "")
        } else {
            log.end()
            throw `Environment is not supported: ${Cypress.env("ENVIRONMENT")}`
        }
    }
}