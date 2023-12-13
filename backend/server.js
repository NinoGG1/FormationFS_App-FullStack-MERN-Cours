const express = require("express");
const app = express();
const port = 3000;

// Middleware qui permet de traiter les données de la request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

// Lancer le serveur
app.listen(port, () => console.log("Le serveur a démarré au port : " + port));
