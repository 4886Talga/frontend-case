describe('Product Details Page with Mocked Data', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/products/5128df48-79fc-4f0f-8b52-d06be54d0cec');
  });

  it('Displays the product details correctly with mocked data', () => {
   
    cy.get('[data-cy="product-container"]').should('exist');

    cy.get('[data-cy="product-container"]').should('exist');

    cy.get('[data-cy="product-brewery-type"]').should('contain.text', 'micro');
    cy.get('[data-cy="product-name"]').should('have.text', '(405) Brewing Co');
    cy.get('[data-cy="product-address"]').should(
      'contain.text',
      '1716 Topeka St, Norman, Oklahoma, 73069-8224, United States'
    );
    cy.get('[data-cy="product-phone"]').should('contain.text', 'Phone: 4058160490');
    cy.get('[data-cy="product-website"]').should('have.attr', 'href', 'http://www.405brewing.com').and('contain.text', 'Visit Website');
  });
});

describe('Product Details Page Link Verification', () => {
  beforeEach(() => {
   
    cy.visit('http://localhost:5173/products/5128df48-79fc-4f0f-8b52-d06be54d0cec');
  });

  it('Verifies clicking on the website link', () => {
    
    cy.get('[data-cy="product-website"]')
      .should('exist')
      .and('have.attr', 'href', 'http://www.405brewing.com')
      .and('contain.text', 'Visit Website');

   
    cy.get('[data-cy="product-website"]').click({ force: true });

  });
});


describe('Product Card Error Handling', () => {
  beforeEach(() => {
    cy.visit('/products/1');
  });
  it('Displays an error message when there is an error', () => {
    
   

    cy.get('[data-cy="error-container"]')
      .should('be.visible')
      .and('contain', 'Error: Failed to fetch product');
  });

  it('Error container has correct styles', () => {
    cy.get('[data-cy="error-container"]')
      .should('have.class', 'bg-red-100')
      .and('have.class', 'border-red-400')
      .and('have.class', 'text-red-700');
  });
});

