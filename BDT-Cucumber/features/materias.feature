
Feature: Consulta de materias, creación y asociación
    

Scenario Outline: Register teacher successful
    Given I go to losestudiantes home screen
    When I open the login screen
    And I fill with <email> and <password>
    And I try to login
    And I click on the program link 
    And I select to program universidad-de-los-andes,maestria,maestrIa-en-ingenierIa-de-software
    And I go to the page <teacherid>
    And I click on button Agregar profesor
    And I fill teacher <firstname>, <lastname>, <gender>, <university> and <program>
    And I try to add teacher
    Then I expect message <message>
    

    Examples:
      | email                       | password | teacherid | firstname | lastname | gender | university | program | message |
      | jwsanabriad@uniandes.edu.co | 12345678 | 2         | Mario     | Andrade  | m | universidad-de-los-andes | 25,historia | El profesor que intentas agregar ya existe |
      #| jwsanabriad@uniandes.edu.co | 12345678 | 2         | Mario     | Piñale  | m | universidad-de-los-andes | 25,historia | Profesor Agregado! |
      
      

Scenario Outline: Register teacher failed
    Given I go to losestudiantes home screen
    When I open the login screen
    And I fill with <email> and <password>
    And I try to login
    And I click on the program link 
    And I select to program universidad-de-los-andes,maestria,maestrIa-en-ingenierIa-de-software
    And I go to the page <teacherid>
    And I click on button Agregar profesor
    And I fill teacher <firstname>, <lastname>, <gender>, <university> and <program>
    And I try to add teacher
    Then I expect register fail <error>
    

    Examples:
      | email                       | password | teacherid | firstname | lastname | gender | university               | program     | error |
      | jwsanabriad@uniandes.edu.co | 12345678 | 2         | Mario     | Andrade  |        | universidad-de-los-andes | 25,historia | Selecciona el sexo del profesor |
      | jwsanabriad@uniandes.edu.co | 12345678 | 2         | Mario     | Andrade  | m      | universidad-de-los-andes | inicial     | inicial |
      | jwsanabriad@uniandes.edu.co | 12345678 | 2         | Mario     | Andrade  | m      | inicial | inicial     | inicial |
      | jwsanabriad@uniandes.edu.co | 12345678 | 2         |      | Andrade  | m      | universidad-de-los-andes | 25,historia |  |
      | jwsanabriad@uniandes.edu.co | 12345678 | 2         | Mario     |   | m      | universidad-de-los-andes | 25,historia |  |
      
      
Scenario Outline: Add signature to teacher successful
    Given I go to losestudiantes home screen
    When I open the login screen
    And I fill with <email> and <password>
    And I try to login
    And I click on the program link 
    And I select to program universidad-de-los-andes,maestria,maestrIa-en-ingenierIa-de-software
    And I go to the page <teacherid>
    And I click on button Agregar profesor
    And I fill teacher <firstname>, <lastname>, <gender>, <university> and <program>
    And I try to add teacher
    Then I expect register fail <error>
    

    Examples:
      | email                       | password | teacherid | firstname | lastname | gender | university               | program     | error |
      | jwsanabriad@uniandes.edu.co | 12345678 | 2         | Mario     | Andrade  |        | universidad-de-los-andes | 25,historia | Selecciona el sexo del profesor |
      | jwsanabriad@uniandes.edu.co | 12345678 | 2         | Mario     | Andrade  | m      | universidad-de-los-andes | inicial     | inicial |
      | jwsanabriad@uniandes.edu.co | 12345678 | 2         | Mario     | Andrade  | m      | inicial | inicial     | inicial |
      | jwsanabriad@uniandes.edu.co | 12345678 | 2         |      | Andrade  | m      | universidad-de-los-andes | 25,historia |  |
      | jwsanabriad@uniandes.edu.co | 12345678 | 2         | Mario     |   | m      | universidad-de-los-andes | 25,historia |  |

