describe("Module Purchase Journey Event Type", function () {
    it("Event Type Module Purchase Journey", function () {
      cy.visit("https://learningneverends.iob.ie");
      cy.viewport(1334, 740);
  
      // Click on navigation menu to expand
      cy.get(".meganav-menu:nth-child(2) > .arrow-head").click();
  
      // Click on Discover Events
      cy.get(".discover-meganav-columns:nth-child(2) li:nth-child(4) a").click();
  
      // Click on Retail Banking
      cy.contains("Retail Banking").click();
  
      // Click on an event
      cy.get(".swiper-slide:nth-child(81) .standard-card__background").click();
  
      // Click on '< Go to all events'
      cy.contains("< Go to all events").click();
  
      // Click on Financial Advice & Planning
      cy.contains("Financial Advice & Planning").click();
  
      // Click on All
      cy.contains("All").click();
  
      // Click on another event
      cy.get(".swiper-slide-active .standard-card__background").click();
  
      // Click on another event
      cy.get(".swiper-slide-next .standard-card__background").click();
  
      // Click on Events from navigation menu
      cy.contains("Events").click();
  
      // Click on a specific date event
      cy.contains("08 Feburary 2022").click();
  
      // Click on a specific event
      cy.contains("Professional Diploma in Compliance").click();
    });
  });
  