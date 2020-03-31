  const express = require('express');

  const app = express();
  app.listen(3000,"105.112.53.8");

  app.use(express.static("public"));
  console.log("listening at 3000,105.112.53.8");


