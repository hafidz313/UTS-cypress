describe('User Can Open Login Page', () => {
  it('User Can Open Login Page edited', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.get('h4').should("contain", "Login");

  })
})