# Vytautas Matulevičius Automation task

## Steps to get the project running:
1. Install latest [Node.js ](https://nodejs.org/)
2. Clone the repo: "**git clone https://github.com/Veetoutas/Homework.git**"
3. Navigate to the project directory in the terminal
4. Install the dependecies: "**npm install**"
5. Install Cypress: **npm install cypress --save-dev**
6. Open Cypres Test Runner with terminal command: "**npx cypress open**"
7. Click "E2E Testing"
8. Choose "Chrome" and click "**Start E2E Testing in Chrome**"
9. Click on the "**home.cy.js**" file
10. Test should start running
11. To re-run the test click this button at the top left of the Cypress Test Runner window:

    ![alt text](image.png)

**P.S.** After step **4**  if you want to run tests without the Cypress Test Runner UI you can simply use 
**npx cypress run** command in the terminal and it will run the test "under the hood" and will return the result once the test is over :)
