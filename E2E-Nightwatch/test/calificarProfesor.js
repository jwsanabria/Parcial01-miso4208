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
   

    'Calificar a un profesor': function(browser) {
        browser
          .waitForElementVisible('input[role="combobox"', 4000)
          .setValue('input[role="combobox"]', 'Pruebas Automáticas - MISO4208 - Ingeniería de Sistemas')     
          .waitForElementVisible('div[class="Select-option is-focused"]', 5000)
          .click('div[class="Select-option is-focused"]')
          .waitForElementVisible('h2[id="universidad"]', 5000)
          .useXpath()
          .click('//a[text()="Mario Andrés Torres"]')
          .pause(1000)
          .useCss() 
          .waitForElementVisible('.nombreProfesor', 5000)
          .click('.boton')
          .waitForElementVisible('.escribirSeleccionado', 50000)
          .setValue('.escribirSeleccionado', 'Mario siempre esta pendiente por brindar una oportuna comunicación con los estudiantes, atento a los cambios y las oportunidades de mejora que se pueden dar en las clases.')
          .setValue('.textoProsCons', 'Los talleres no referencian las versiones utilizadas de las herramientas')
          .setValue('input[name="aprueba"]', 'true')
          .click('select[name="periodo"] option[value="2018-10"')
          .click('select[name="idMateria"] option[value="MISO4208"')
          .moveToElement('.slider-tick-container', 0, 0)
          .mouseButtonDown(0)
          .moveToElement('.slider-tick-container',  250,  0) // Move to offset position of 200(x) 600(y)
          .mouseButtonUp(0)
          .pause(1000) 
          .useXpath()
          .moveToElement('//html/body/div[3]/div[2]/div/div/div/div/form/div/div/div[1]/table[2]/tbody/tr[2]/td/center/div/div[1]/div[6]', 0, 0)
          .mouseButtonDown(0)
          .moveToElement('//html/body/div[3]/div[2]/div/div/div/div/form/div/div/div[1]/table[2]/tbody/tr[2]/td/center/div/div[1]/div[6]',  107,  0) // Move to offset position of 200(x) 600(y)
          .mouseButtonUp(0)
          .pause(1000) 
          .moveToElement('//html/body/div[3]/div[2]/div/div/div/div/form/div/div/div[1]/table[3]/tbody/tr[2]/td/center/div/div[1]/div[6]', 0, 0)
          .mouseButtonDown(0)
          .moveToElement('//html/body/div[3]/div[2]/div/div/div/div/form/div/div/div[1]/table[3]/tbody/tr[2]/td/center/div/div[1]/div[6]',  280,  0) // Move to offset position of 200(x) 600(y)
          .mouseButtonUp(0)
          .pause(1000) 
          .useCss() 
          .click('.botonPublicar')
          .waitForElementVisible('.post.nuevo', 50000)
          
          .assert.containsText('.post.nuevo', 'Mario siempre esta pendiente por brindar una oportuna comunicación con los estudiantes, atento a los cambios y las oportunidades de mejora que se pueden dar en las clases.')
          .end();
      },
    
      'Calificar a un profesor por segunda vez': function(browser) {
        browser
          .waitForElementVisible('input[role="combobox"', 4000)
          .setValue('input[role="combobox"]', 'Pruebas Automáticas - MISO4208 - Ingeniería de Sistemas')     
          .waitForElementVisible('div[class="Select-option is-focused"]', 5000)
          .click('div[class="Select-option is-focused"]')
          .waitForElementVisible('h2[id="universidad"]', 5000)
          .useXpath()
          .click('//a[text()="Mario Linares Vasquez"]')
          .pause(1000)
          .useCss() 
          .waitForElementVisible('.nombreProfesor', 5000)
          .click('.boton')
          .waitForElementVisible('.escribirSeleccionado', 50000)
          .setValue('.escribirSeleccionado', 'Mario siempre esta pendiente por brindar una oportuna comunicación con los estudiantes, atento a los cambios y las oportunidades de mejora que se pueden dar en las clases.')
          .setValue('.textoProsCons', 'Los talleres no referencian las versiones utilizadas de las herramientas')
          .setValue('input[name="aprueba"]', 'true')
          .click('select[name="periodo"] option[value="2018-10"')
          .click('select[name="idMateria"] option[value="ISIS1206"')
          .moveToElement('.slider-tick-container', 0, 0)
          .mouseButtonDown(0)
          .moveToElement('.slider-tick-container',  250,  0) // Move to offset position of 200(x) 600(y)
          .mouseButtonUp(0)
          .pause(1000) 
          .useXpath()
          .moveToElement('//html/body/div[3]/div[2]/div/div/div/div/form/div/div/div[1]/table[2]/tbody/tr[2]/td/center/div/div[1]/div[6]', 0, 0)
          .mouseButtonDown(0)
          .moveToElement('//html/body/div[3]/div[2]/div/div/div/div/form/div/div/div[1]/table[2]/tbody/tr[2]/td/center/div/div[1]/div[6]',  107,  0) // Move to offset position of 200(x) 600(y)
          .mouseButtonUp(0)
          .pause(1000) 
          .moveToElement('//html/body/div[3]/div[2]/div/div/div/div/form/div/div/div[1]/table[3]/tbody/tr[2]/td/center/div/div[1]/div[6]', 0, 0)
          .mouseButtonDown(0)
          .moveToElement('//html/body/div[3]/div[2]/div/div/div/div/form/div/div/div[1]/table[3]/tbody/tr[2]/td/center/div/div[1]/div[6]',  280,  0) // Move to offset position of 200(x) 600(y)
          .mouseButtonUp(0)
          .pause(1000) 
          .useCss() 
          .click('.botonPublicar')
          .waitForElementVisible('#__next > div > div > div.jsx-4002168029 > div > div > div.sweet-alert > div.text-muted.lead > div', 5000)
          
          .assert.containsText('#__next > div > div > div.jsx-4002168029 > div > div > div.sweet-alert > div.text-muted.lead > div', 'Ya has calificado a este profesor en esta materia')
          .end();
      },
  
  };
