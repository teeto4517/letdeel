describe("Contract Creation", function () {
    it("User can create fixed rate contract", function () {
        cy.visitLetDeelAndLoginAsAClient()
        cy.generalInformation()
        cy.paymentDetails()
        cy.defineDates()
        cy.compliance()
    })
})