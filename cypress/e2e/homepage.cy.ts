describe('HomePage', () => {
  beforeEach(() => {
    cy.visit('/'); // Visit the home page
  });

  it('should display the product list', () => {
    cy.contains('Frontend Case').should('be.visible');
    cy.get('[data-test="product-item"]').should('have.length.greaterThan', 0);
  });
  it('should navigate to the product details page when clicking on a product link', () => {
  
    cy.get('[data-test="product-item"]').first().find('a').click();

    
    cy.url().should('include', '/products/'); 
    
    cy.get('[data-cy="product-name"]').should('exist');
    cy.get('[data-cy="product-brewery-type"]').should('exist');
  });
});