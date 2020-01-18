const database = require('../EmpTrackerDB');
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'employeeDB',
  multipleStatements: true
});

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

function getTotalBudgetByDepartment(departmentID) {
  return new Promise((resolve, reject) => {
    const query = `SELECT SUM(salary) AS 'Total Department Budget'
      FROM employee
      LEFT JOIN role ON employee.role_id=role.id
      WHERE role.department_id = ?`;
    db.query(query, [departmentID], (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results[0]['Total Department Budget']);
      }
    });
  });
}

module.exports = {
  getTotalBudget,
  getTotalBudgetByDepartment
};
