const express = require ('express');
const app = express();
const port = 8000;

const dbQuery = require('./db.js');

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/user/:id', async (req, res) => {
  let params = {
    text: `SELECT users.username, users.city, users.id as users_id, a.* ` +
          `FROM (SELECT bikes.brand as bike_brand, miles, bikes.user_id, parts.brand as part_brand, parts.id, parts.bike_id, parts.part_type FROM bikes LEFT JOIN parts on bikes.id=parts.bike_id) a ` +
        `LEFT JOIN users on a.user_id=users.id WHERE users.id=${req.params.id}`
  };
  let result = await dbQuery(params);
  let manipResult = {id: result[0].user_id, username: result[0].username, city: result[0].city};

  let bikes = {};
  result.forEach(bike => {
    if (bikes[bike.id] === undefined) {
      let currentId = bike.bike_id
      bikes[currentId] = { brand: bike.bike_brand, miles: bike.miles }
      let parts = [];
      for (let part of result) {
         if (part.bike_id === currentId) {
           parts.push({id: part.id, type: part.part_type, brand: part.part_brand});
         }
      }
      bikes[currentId].parts = parts;
    }
  })

  manipResult.bikes = [];
  Object.keys(bikes).forEach(id => {
    bikes[id].id = id;
    manipResult.bikes.push(bikes[id]);
  });

  
  res.send(manipResult);


});


app.get('/bikes', (req, res) => {

});


app.get('/parts', (req, res) => {

});


app.listen(port, () => {
  console.log('server listening')
})