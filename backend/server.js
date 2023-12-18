const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const cors = require("cors");
const port = 3001;

// Connexion à la base de données
connectDB();

const app = express();

// Authorisation CORS
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

// Middleware qui permet de traiter les données de la request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

// Lancer le serveur
app.listen(port, () => console.log("Le serveur a démarré au port : " + port));
