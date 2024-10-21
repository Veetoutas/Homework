const customerInfo = {
  country: 'Lithuania',
  street: 'Studentu',
  email: 'test@test.com',
  name: 'Tester',
  phone: '+111111111',
  customField: 'I am really hungry today :)',
  selfServiceParcelAddress: 'Kauno RIMI Studentų paštomatas, Studentų g. 19'
};

describe('Muffin shop', () => {
  beforeEach(() => {
    cy.visit("https://lightgrey-antelope-m7vwozwl8xf7l3y2.builder-preview.com");
  });

  it('should complete the full shopping and checkout process', () => {
    cy.navigateToShopFromHome();
    cy.sortByPriceHighToLow();
    cy.assertSortingDescending("product-list-section-item-price")
    cy.addFirstItemToBasket();
    cy.proceedToCheckout();
    cy.fillShippingDetails(customerInfo);
    cy.fillContactInfo(customerInfo);
    cy.clickButtonByData("checkout-contactinformation-continue");
    cy.clickButtonByData("checkout-paymentmethods-placeorder");
    cy.getByData("ecommerce-modal-checkout-success-order").contains('Thank you for your order');
  });
});