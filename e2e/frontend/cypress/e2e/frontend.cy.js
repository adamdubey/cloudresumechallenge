describe('frontend client application', () => {
  beforeEach(() => {
    cy.visit('https://devopscloudresume.com');
  });

  it('loads page on visit', () => {
    cy.root().should('match', 'html');
  });

  it('displays avatar image', () => {
    cy.get('#avatar').should('be.visible');
  });

  it('displays experience section', () => {
    cy.get('#xp').contains('Experience');
  });

  it('displays cloudresumechallenge link', () => {
    cy.get('#objective>p>a').contains('The Cloud Resume Challenge').should('have.attr', 'href', 'https://cloudresumechallenge.dev/');
  });

  it('displays certification secion', () => {
    cy.get('#certs').contains('Certifications')
  })

  it('displays visitor count', () => {
    cy.get('#visits').should('be.visible');
  });

  it('displays project source link', () => {
    cy.get('footer>p>a').contains('Project Source').should('have.attr', 'href', 'https://github.com/adamdubey/cloudresumechallenge/');
  });
});
