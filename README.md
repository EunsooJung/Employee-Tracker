# Employee-Tracker

Build a CLI application to manage company's employees using node, inquirer, and MySQL.

- [Applied to My Reponsive Portfolio](https://eunsoojung.github.io/Responsive-Portfolio/portfolio.html)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

```bash
# Install inquirer
npm i inquirer

# Install MySQL
npm i mysql

# Run
node index.js or npm start (using nodemon)
```

## Preview

[![Employee-Tracker](https://github.com/EunsooJung/Employee-Tracker/blob/master/assets/images/Emp-Tracker-Demo.gif)](https://github.com/EunsooJung/Employee-Tracker/blob/master/assets/images/Emp-Tracker-Demo.gif)

## Usage

### Basic Usage

To get Note Taker, after downloading, you need to make sure Git Bash terminal open and looking at the correct folder. When you are within the correct location, you may type the following commands to ask her for information:

- node index.js

### Guidelines:

- Proceeds as follows:

To use this applicaion, Clone the applicaion to your local git repository or directory:

- In your terminal, git clone https://github.com/EunsooJung/Employee-Tracker.git

To start:

- Open your terminal then "npm start"

### Code Snippet

- Project structure

  [![Employee Tracker](https://github.com/EunsooJung/Employee-Tracker/blob/master/assets/images/ProjectStructure.png)]

- Source Code Check point

1. ORM - EmpTrackerDB.js: Connect to MySQL Database, reset database and defined db schema.
2. Models layer example - budget.js: Defined functions to Calculates the combinded salaries of all employees and by department that using the Promise.

```javascript
function getTotalBudget() {
  return new Promise((resolve, reject) => {
    const query = `SELECT SUM(salary) AS 'Total Budget' FROM role, employee WHERE employee.role_id=role.id`;
    db.query(query, (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results[0]['Total Budget']);
      }
    });
  });
}
```

3. View layer example: index.js using the inquirer

- import controllers into the index.js

```javascript
  switch (answer.action.toLowerCase()) {
    case 'view all employees':
      await displayAllEmployees();
```

4. Controllers layer example - budget.js: Displays the total utilized budget that applied async/wait

```javascript
async function displayTotalBudget() {
  try {
    let totalBudget = await getTotalBudget(); // from budget model
    totalBudget = new Intl.NumberFormat('en-CAD', {
      style: 'currency',
      currency: 'CAD'
    }).format(totalBudget);
    const footer = displayHeadline(`Total Budget`); // from utils/etLog.js
    displayResults(`Total Budget: ${totalBudget}`);
    displayFooter(footer);
  } catch (err) {
    if (err) throw err;
  }
}
```

5. utils: Defined etBanner and etLog to design print (ex: font, size, color etc.) page in inquirer.

## Built With

- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Inquirer](https://www.npmjs.com/package/inquirer) -- Interactive CLI
- [Node.js](https://nodejs.org/en/)
- [MySQL](https://www.npmjs.com/package/mysql)
- [MVC Patterns](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)

## Authors

- **Michael(Eunsoo)Jung**

* [Employee Tracker: Demo](https://github.com/EunsooJung/Employee-Tracker)
* [My Portfolio](https://eunsoojung.github.io/Responsive-Portfolio/portfolio.html)
* [Link to Github](https://github.com/EunsooJung/Employee-Tracker)
* [Link to LinkedIn](www.linkedin.com/in/eun-soo-jung/)

## License

This project is licensed under the MIT License
