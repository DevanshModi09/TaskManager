const express = require('express');
const taskRoutes = require('./routes/tasks');
const connectDB = require('./db/connect.js');
const notFound = require('./middlewares/notfound.js');
const errorHandlerMiddleware = require('./middlewares/errorHandler.js');
const app = express();
require('dotenv').config();
//middlewares
app.use(express.json());
app.use(express.static('./public'));
//routes
app.use('/api/v1/tasks', taskRoutes);
app.use(notFound);
app.use(errorHandlerMiddleware);
//Starting the server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(process.env.PORT, () => {
      console.log('Server is now running on ' + process.env.PORT);
    });
  } catch (err) {
    console.log(err);
  }
};
start();
