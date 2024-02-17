const express = require("express");

const sequelize = require("./data/database");
const productRoutes = require('./routes/product');

const app = express();

//entry to our rest api server

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(productRoutes);

sequelize
  .sync({ force: true })
  .then((result) => {
    console.log(result);
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

// const express = require('express');
// const sequelize = require('./data/database');

// const app = express();

// // Define an async function to start the server
// async function startServer() {
//     try {
//         // Synchronize the Sequelize instance with the database
//         const result = await sequelize.sync();
//         console.log(result); // Log the result of the synchronization process

//         // Start the Express server
//         app.listen(3000, () => {
//             console.log('Server is running on port 3000');
//         });
//     } catch (err) {
//         // Log any errors that occur during the synchronization process or server startup
//         console.error('Error starting server:', err);
//     }
// }

// // Call the async function to start the server
// startServer();
