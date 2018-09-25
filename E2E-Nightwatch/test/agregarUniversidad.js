module.exports = { // adapted from: https://git.io/vodU0  
    beforeEach: function (browser, done) {
      browser.resizeWindow(1280, 800, done);
      browser
        .url('https://losestudiantes.co/')
        .click('.botonCerrar')
        .waitForElementVisible('.botonIngresar', 4000)
        .click('.botonIngresar')
        .setValue('.cajaLogIn input[name="correo"]', 'jwsanabriad@uniandes.edu.co')
        .setValue('.cajaLogIn input[name="password"]', '12345678')
        .click('.cajaLogIn .logInButton')
        .waitForElementVisible('button[id="cuenta"]', 4000);
    },
   

    'Realizar votacion por cobertura de universidades': function(browser) {
        browser
          .click('.agregar')
          .useXpath()  
          .waitForElementVisible('//h1[text()="Cobertura de Los Estudiantes"]', 4000)
          .click('//li[1]/div/span/span/button')
          .pause(1000)
          .click('//li[2]/div/span/span/button')
          .pause(1000)
          .assert.containsText('//body/div/div/div/div/div[2]/div/div/div[2]/div/div[3]/ul/li[2]/div/span', '47.79%')
          .useCss()
          .end();
      },
    

  
  };