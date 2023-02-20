// Import modules and create app
const express = require('express');
const cors    = require('cors');
const app     = express();
const router  = require('./app/routes/router')
const message = require('./app/middleware/message');
const errorHandling = require('./app/middleware/ErrorHandling');

// Setting up App/Server
app.set('port', process.env.PORT || 6969);
app.use(express.json());
app.use(cors(), errorHandling);

// Handling Routes
app.use('/', message, (req, res) => {
  res.json({ msg: "Welcome" });
})
app.use('/products', router.productRoutes);
app.use('/users', router.userRoutes);
app.use('/orders', router.orderRoutes);

// Listening for requests
app.listen(app.get("port"), () => {
  console.log(`Listening for requests on port: ${app.get('port')}`);
  console.log("Press Ctrl+C to exit server");
});