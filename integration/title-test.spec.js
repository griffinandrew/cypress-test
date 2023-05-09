describe('Title Check', () => {
  it('Checks for the correct title on the website', () => {
    cy.visit('https://www.google.com');
    cy.title().should('include', 'Google');
  });
});
