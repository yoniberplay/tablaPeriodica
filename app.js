const express = require("express");
const path = require("path");
const engine = require("express-handlebars");
const rendersHelpers = require("./helpers/hbs/renders");
const complementarHelpers = require("./helpers/hbs/complementar");
const validateHelpers = require("./helpers/hbs/validate");
const dataHelpers = require("./helpers/hbs/data");
const homeRouter = require("./routes/home");

const app = express();

//? render engine configuration
app.engine(
  "hbs",
  engine({
    helpers: {
      posicionTransaparente: rendersHelpers.posicionTransaparente,
      saltoDeLinea: rendersHelpers.saltoDeLinea,
      IsModule: rendersHelpers.IsModule,
      complementar: complementarHelpers.complementar,
      validate: validateHelpers.Validate,
      data: dataHelpers.data,
      footerRender: rendersHelpers.footerRender,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", "views");

// Convertir la data recibida por post en un json
app.use(express.urlencoded({ extended: false }));
//Hacer los datos de la dentro de la carpeta public publicos
app.use(express.static(path.join(__dirname, "public")));

//Mejor manejo de rutas
app.use(homeRouter.Router);

//Middleware
app.use((req, res, next) => {
  res.status(404).render("404", { layout: false, title: "404 page not found" });
});

app.listen(3000);
