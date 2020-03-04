const db = require('pg');

const{ Pool, Client } = require('pg');
const pool = new Pool ({
  user: 'postgres',
  host: '127.0.0.1',
  // host: 'db',
  password: 'password',
  database: 'threetables',
  port: '5432',
  max: 10
});

const dbQuery = async (params) => {
  return (await pool.query(params)).rows;
};


module.exports = dbQuery;