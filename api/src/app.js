require('dotenv').config();
const express = require('express');
const cors=require('cors');

// routes
const todoRoutes = require('./routes/todo.routes');

// utils
const sequelize = require('./utils/database');

// init app
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/todos', todoRoutes);

// test and sync connection
sequelize.authenticate()
    .then(() => console.log('Database connected'))
    .catch((e) => console.log(error));

sequelize.sync()
    .then(() => console.log('Database synced'))
    .catch((e) => console.log(e));

// server Express
app.listen(process.env.PORT, () => {
    console.log(`app running on port ${process.env.PORT}`);
});
