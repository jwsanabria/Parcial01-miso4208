module.exports = { // adapted from: https://git.io/vodU0  
    beforeEach: function (browser, done) {
      browser.resizeWindow(1280, 800, done);
    },
    'Consultar un profesor por maestria - aleatorio': function(browser) {
      browser
        .url('https://losestudiantes.co/')
        .click('.botonCerrar')
        .waitForElementVisible('.opcion_maestria_click', 4000)
        .click('.opcion_maestria_click')
        .waitForElementVisible(".departamentoLabel", 4000)
        .click('.select option[value="universidad-de-los-andes,maestria,maestrIa-en-ingenierIa-de-software"')
        .pause(1000)
        .useXpath()  
        .click('//button[text()="Aleatorio"]')
        .waitForElementVisible('//div[text()="Dario Correal"]', 4000)
        .click('//div[text()="Dario Correal"]')
        .useCss() 
        .waitForElementVisible('.nombreProfesor', 50000)
        .assert.containsText('.nombreProfesor', 'Dario Correal')
        .end();
    },
    

    'Consultar un profesor por maestria - alfabetico': function(browser) {
      browser
        .url('https://losestudiantes.co/')
        .click('.botonCerrar')
        .waitForElementVisible('.opcion_maestria_click', 4000)
        .click('.opcion_maestria_click')
        .waitForElementVisible(".departamentoLabel", 4000)
        .click('.select option[value="universidad-de-los-andes,maestria,maestrIa-en-ingenierIa-de-software"')
        .pause(1000)
        .useXpath()  
        .click('//button[text()="Alfabético"]')
        .waitForElementVisible('//div[text()="Juan Pablo Fernandez"]', 4000)
        .click('//div[text()="Juan Pablo Fernandez"]')
        .useCss() 
        .waitForElementVisible('.nombreProfesor', 50000)
        .assert.containsText('.nombreProfesor', 'Juan Pablo Fernandez')
        .end();
    },

    'Consultar un profesor por pregrado - aleatorio': function(browser) {
      browser
        .url('https://losestudiantes.co/')
        .click('.botonCerrar')
        .waitForElementVisible('.opcion_maestria_click', 4000)
        .click('.opcion_maestria_click')
        .waitForElementVisible('.opcion_maestria_click', 4000)
        .click('.opcion_maestria_click')
        .waitForElementVisible('.departamentoLabel', 4000)
        .click('#sample_select option[value="universidad-de-los-andes,pregrado,filosofia"')
        .pause(1000)
        .useXpath()  
        .click('//button[text()="Aleatorio"]')
        .waitForElementVisible('//div[text()="Santiago Rey Salamanca"]',4000)
        .click('//div[text()="Santiago Rey Salamanca"]')
        .useCss() 
        .waitForElementVisible('.nombreProfesor', 50000)
        .assert.containsText('.nombreProfesor', 'Santiago Rey Salamanca')
        .end();
    },
    

    'Consultar un profesor por pregrado - alfabetico': function(browser) {
      browser
        .url('https://losestudiantes.co/')
        .click('.botonCerrar')
        .waitForElementVisible('.opcion_maestria_click', 4000)
        .click('.opcion_maestria_click')
        .waitForElementVisible('.opcion_maestria_click', 4000)
        .click('.opcion_maestria_click')
        .waitForElementVisible(".departamentoLabel", 4000)
        .click('.select option[value="universidad-de-los-andes,pregrado,filosofia"')
        .pause(1000)
        .useXpath()  
        .click('//button[text()="Alfabético"]')
        .waitForElementVisible('//div[text()="Adrian Cussins"]', 4000)
        .click('//div[text()="Adrian Cussins"]')
        .useCss() 
        .waitForElementVisible('.nombreProfesor', 50000)
        .assert.containsText('.nombreProfesor', 'Adrian Cussins')
        .end();
    },

    'Consultar profesor por nombre y dirigirse a su página': function(browser) {
      browser
        .url('https://losestudiantes.co/')
        .click('.botonCerrar')
        .waitForElementVisible('input[role="combobox"', 4000)
        .setValue('input[role="combobox"]', 'Adolfo Jose Quiroz Salazar')     
        .waitForElementVisible('div[class="Select-option is-focused"]', 50000)
        .click('div[class="Select-option is-focused"]')
        .waitForElementVisible('h2[id="universidad"]', 50000)
        .waitForElementVisible('.nombreProfesor', 50000)
        .assert.containsText('.nombreProfesor', 'Adolfo Jose Quiroz Salazar')
        .end();
    },

    'Consultar profesor por materia y dirigirse a su página': function(browser) {
      browser
        .url('https://losestudiantes.co/')
        .click('.botonCerrar')
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
        .assert.containsText('.nombreProfesor', 'Mario Linares Vasquez')
        .end();
    },


    'Filtro por materia en la pagina de un profesor': function(browser) {
      browser
        .url('https://losestudiantes.co/')
        .click('.botonCerrar')
        .waitForElementVisible('input[role="combobox"', 4000)
        .setValue('input[role="combobox"]', 'Mario Linares Vasquez')     
        .waitForElementVisible('div[class="Select-option is-focused"]', 50000)
        .click('div[class="Select-option is-focused"]')
        .waitForElementVisible('h2[id="universidad"]', 50000)
        .waitForElementVisible('.statsProfesorDropdownItemChecked', 50000)
        .waitForElementVisible('input[name="id:ISIS1206"]', 50000)
        .click('input[name="id:ISIS1206"]')
        .waitForElementVisible('.cursiveText', 50000)
        .assert.containsText('.cursiveText', '100.00% de los estudiantes lo aprueban')
        .end();
    }



  };
  