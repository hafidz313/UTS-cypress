describe('template spec', () => {
  afterEach(()=> {
    cy.log('runs once after each teste in the block');
  })


  beforeEach(()=> {
    //arrange
    cy.visit('http://127.0.0.1:8000/');

    //reset database
    cy.exec('cd ..cd/demo-app-cypress-automation && php artisan migrate:fresh --seed', { failOnNonZeroExit: false }).then((result) => {
      // Assert that the command exited with a successful exit code.
      expect(result.code)
      });
    //php artisan migrate:fresh --seed
    //act
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    cy.visit('http://127.0.0.1:8000/user-management/user');
    
    
  });
  
  it('User can create new user', () => {
    cy.get('.card-header-action > .btn-icon').click();
    
    cy.get('#name').type('hafid');
    cy.get('#email').type('polinema@gmail.com');
    cy.get('#password').type('1234567890');
    cy.get('.btn-primary').click();

    // //assert
    // cy.get('p').should('have.text', 'The email has already been taken.');
    cy.get('.navbar-right > :nth-child(2) > .nav-link').click();
    cy.get('.text-danger').click();
    /* ==== End Cypress Studio ==== */
  })

  //positive test case
  /* ==== Test Created with Cypress Studio ==== */
  it.only('User can edit existing data user baru', () => {
    cy.get(".table td")
    .contains("haped")
    .parent()
    .find("a")
    .contains("Edit")
    .click();
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#name').clear('haped');
    cy.get('#name').type('haped2');
    cy.get('.btn-primary').contains("Submit").click();
    cy.get('.table td')
    .contains('haped').should('have.text','haped2');
    /* ==== End Cypress Studio ==== */
    cy.get(".alert")
    .should("be.visible")
    .and("have.class","alert-success")
    .and("contain","User Berhasil Diupdate")
  })
})