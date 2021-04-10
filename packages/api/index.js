// Importing libraries
const app = require('express')();

const cors       = require('cors');
const bodyParser = require('body-parser');

const walk       = require('./helpers/walk');
const path       = require('path');

// Applying middlewares
app.use(cors());
app.use(bodyParser);

// Mounting our routes
walk('./routes', (error, files) => {
  files.forEach((element) => {
    let route = require(element);
    let filePath = path.relative(__dirname + '/routes', element);
    let url = filePath.split('.').shift();

    if (!url.includes("_")) {
      try {
        if (url.includes("index")) {
          url = path.dirname(filePath);
        };

        app.use(`/${url == "." ? "" : url}`, route)
      }

      // Lock at this! It's a very complicated logging system!1!!
      catch(error) {
        console.log(error);
      }
    }
  })
});

// Warming up our application
app.listen(3000);