<reference types="cypress" />
import React from 'react';


it('main page loaded', () => {
    cy.visit("https://tourasiaonline.web.app/")
    cy.contains("Travel Asia");
    cy.contains("Directions: Exit Chinatown MRT via exit A");
});

it('go to Book Now and type input', () => {
    const firstName = "Matt";
    const lastName = "Foo";

    cy.get(".hoverBtn").click();
    //OR cy.get("button[name=navbar-btn]").click();
    cy.contains("Travel Details");

    //Fill out first and last name
    cy.get('#fName').type(firstName);
    cy.get('#lName').type(lastName);
});

it('go to Book Now and test input blank error messages', () => {

    cy.get(".hoverBtn").click();
    //OR cy.get("button[name=navbar-btn]").click();

    //Check if zipcode error message appears if left blank
    cy.contains("Submit").click();
    cy.contains("Please provide a valid zip");
});

it('go to pages Japan/China/Korea', () => {
    cy.get("[href='/Japan']").click();
    cy.get("[href='/Korea']").click();
    cy.get("[href='/China']").click();
})