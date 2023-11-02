describe('template spec', () => {

  before(()=> {
    cy.log('runs once before all teste in the block');
  })

  after(()=> {
    cy.log('runs once after all teste in the block');
  })

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
    cy.get('.card-header-action > .btn-icon').click();
    
  });
  
  it('User can create new user', () => {
    cy.visit('http://127.0.0.1:8000')
  })

  //positive test case
  /* ==== Test Created with Cypress Studio ==== */
  it('create user', function() {
    /* ==== Generated with Cypress Studio ==== */
    
    cy.get('#name').type('baru');
    cy.get('#email').type('baru@gmail.com');
    cy.get('#password').type('1234567890');
    cy.get('.btn-primary').click();

    //assert
    cy.get('p').should('have.text', 'Data Berhasil Ditambahkan');
    cy.get('.navbar-right > :nth-child(2) > .nav-link').click();
    cy.get('.text-danger').click();
    /* ==== End Cypress Studio ==== */
  });

  it('user cannot create new user because name is required', function() {
    /* ==== Generated with Cypress Studio ==== */
    
    cy.get('#email').type('baru@gmail.com');
    cy.get('#password').type('1234567890');
    cy.get('.btn-primary').click();

    //assert
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.invalid-feedback').should('be.visible');
    cy.get('.invalid-feedback').should('have.class','invalid-feedback');
    cy.get('.invalid-feedback').should('contain', 'The name field is required.');
    cy.get('.navbar-right > :nth-child(2) > .nav-link').click();
    cy.get('.text-danger').click();
    /* ==== End Cypress Studio ==== */
  });


})