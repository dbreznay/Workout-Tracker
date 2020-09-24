const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan('dev'));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout_tracker',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

  app.use(require("./routes/apiRoutes"));
  app.use(require("./routes/htmlRoutes"));

app.listen(PORT, () => console.log(`Server listening or PORT: ${PORT}`));