describe('Adding a new task', () => {
    it('Add a new task to ToDoMatic', () => {
        cy.visit('http://localhost:3000');

        cy.get('[id="new-todo-input"]')
        .type("New Task");
        
        cy.get('[id="new-todo-input"]')
        .type("New Task");

        cy.get('[id="add-task-submit-button"]')
        .click();

        cy.get('[id="task-list"]')
        .contains("New Task");

    });
});