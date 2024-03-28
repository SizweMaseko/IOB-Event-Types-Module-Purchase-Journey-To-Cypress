it('Enrols in Financial Advice (QFA) program', () => {
    // Open the website with credentials
    cy.visit('https://learningneverends.iob.ie', {
      auth: {
        username: 'Adam',
        password: 'IOB2020'
      }
    });
  
    // Set window size
    cy.viewport(1334, 740); 
  });
  
  