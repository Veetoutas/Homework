Cypress.Commands.add("getByData", (selector) => {
    return cy.get(`[data-qa="${selector}"]`);
  });

Cypress.Commands.add("getById", (selector) => {
    return cy.get(`[id="${selector}"]`);
});

Cypress.Commands.add("getByClass", (selector) => {
    return cy.get(`[class="${selector}"]`);
});

Cypress.Commands.add("getByInput", (selector) => {
    return cy.get(`input[${selector}"]`);
});

Cypress.Commands.add('navigateToShopFromHome', () => {
    cy.getByData("navigation-item-shop").contains("Shop").click();
});

Cypress.Commands.add('sortByPriceHighToLow', () => {
    cy.getById("sorting-options").select("Price (high to low)");
    cy.wait(1000);
    cy.getByData("product-list-section-item-price").should('be.visible');
});

Cypress.Commands.add('addFirstItemToBasket', () => {
    cy.getByData("product-list-section-item-image").first().click();
    cy.clickButtonByData("productsection-btn-addtobag");
});

Cypress.Commands.add('proceedToCheckout', () => {
    cy.clickButtonByData("shoppingcart-btn-checkout");
});

Cypress.Commands.add('fillShippingDetails', (customerInfo) => {
    cy.getByInput('id="destination').type(customerInfo.country);
    cy.getByClass("v-list-item-title").contains(customerInfo.country).click();
    cy.getByInput('placeholder="Choose address').type(customerInfo.street);
    cy.getByClass("v-list-item-title").contains('Studentų g. 19').click();
    cy.getByData('checkout-shippingoptions-parcelselect').should('have.text', customerInfo.selfServiceParcelAddress);
    cy.clickButtonByData("checkout-shippingdetails-continue");
});

Cypress.Commands.add('fillContactInfo', (customerInfo) => {
    cy.getByInput('id="email').type(customerInfo.email);
    cy.getByInput('id="name').type(customerInfo.name);
    cy.getByInput('id="phone').type(customerInfo.phone);
    cy.getByInput('id="customFieldValue').type(customerInfo.customField);    
});

Cypress.Commands.add('clickButtonByData', (dataAttribute) => {
    cy.getByData(dataAttribute).click();
});
  
Cypress.Commands.add('assertSortingDescending', (dataAttribute) => {
    cy.getByData(dataAttribute).then(($prices) => {
        const prices = Cypress._.map($prices, (el) =>
          parseFloat(el.innerText.replace(/[^0-9.]/g, ''))
        );
        expect(prices).to.deep.equal([...prices].sort((a, b) => b - a));
      });
});