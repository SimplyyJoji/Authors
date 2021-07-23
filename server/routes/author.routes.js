const authorController = require("../controllers/author.controllers");

/*
Leading slash required in routes 
Export a function to be called in server.js where the app will be passed in  */

module.exports = (app) => {
  //When one of these URLS is visited, executed the corresponding method
  app.post("/api/authors", authorController.create);
  app.get("/api/authors", authorController.getAll);
  app.get("/api/authors/:id", authorController.getOne);
  app.delete("/api/authors/:id", authorController.delete);
  app.put("/api/authors/:id", authorController.update);
};