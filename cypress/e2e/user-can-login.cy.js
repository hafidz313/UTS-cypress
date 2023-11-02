describe('User can login to system', () => {
  //Positive Test Case
  it('user can login with valid username and password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000');

    //act

    //select element html yang dibutuhkan
    //kalo sudah dapat elementnya mau diapakan ?
    cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com");
    //select element html yang dibutuhkan
    //kalo sudah dapat elementnya mau diapakan?
    cy.get(':nth-child(3) > .form-control').type("password");
     
    cy.get('.btn').click();

    //assert

    //select element html yang dibutuhkan
     //lakukan assertion sesuai test case
    cy.get('.nav-link > .d-sm-none').should("have.text","Hi, SuperAdmin")
  })

  //negative test case

  it('user cannot login with invalid username and password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/');

    //act

    //select element html yang dibutuhkan
    //kalo sudah dapat elementnya mau diapakan ?
    cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com");
    //select element html yang dibutuhkan
    //kalo sudah dapat elementnya mau diapakan?
    cy.get(':nth-child(3) > .form-control').type("password-salah");
     
    cy.get('.btn').click();

    //assert
    cy.get('.invalid-feedback').should(
      "have.text","These credentials do not match our records."
    )
  })

  it('user cannot login with invalid username and password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/');

    //act

    //select element html yang dibutuhkan
    //kalo sudah dapat elementnya mau diapakan ?
    cy.get(':nth-child(2) > .form-control').type("superadmins@gmail.com");
    //select element html yang dibutuhkan
    //kalo sudah dapat elementnya mau diapakan?
    cy.get(':nth-child(3) > .form-control').type("password");
     
    cy.get('.btn').click();

    //assert
    cy.get('.invalid-feedback').should(
      "have.text","These credentials do not match our records."
    )

    
  })

  it('user cannot login with empty username and correct password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/');

    //act

    
    cy.get(':nth-child(3) > .form-control').type("password");
     
    cy.get('.btn').click();
    //assert
    cy.get('.invalid-feedback').should(
      "have.text","The email field is required."
    )

    
  })

  it('user cannot login with correct username and empty password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/');

    //act

    //select element html yang dibutuhkan
    //kalo sudah dapat elementnya mau diapakan ?
    cy.get(':nth-child(2) > .form-control').type("superadminads@gmail.com");
     
    cy.get('.btn').click();

    //assert
    cy.get('.invalid-feedback').should(
      "have.text","The password field is required."
    )

    
  })

  // Chelenge

  // Positif
  // Ketika login masukan username dan password tetapi sensitif huruf besar kecilnya 
  it('Username dan password tetapi sensitif huruf besar kecilnya ', () => {
    cy.visit("http://127.0.0.1:8000");
    cy.get(":nth-child(2) > .form-control").type("Superadmin@gmail.com");
    cy.get(':nth-child(3) > .form-control').type("password");
    cy.get('.btn').click();
    cy.get('.nav-link > .d-sm-none').should("have.text", "Hi, SuperAdmin");

  });

  // Negatif 
  // Menjawab challenge untuk negative test, apabila langsung tombol login akan muncul notifikasi silahkan isi email dan pass terlebih dahulu
  it.only("User wajib melakukan mengisi username dan password terlebih dahulu sebelum melakukan klik tombol login", () => {
    // arrange
    cy.visit("http://127.0.0.1:8000");
    // act
    cy.get('.btn').click();
    // assert
    cy.get('.invalid-feedback').should(
      "have.text",
      "The email field is required.The password field is required."
    );
  });

})

