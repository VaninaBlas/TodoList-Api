const express = require("express");
const tasksRoutes = require("./src/routes/tasks");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");

app.use(cors());
dotenv.config();

//usar  el middleware pasar a json
app.use(express.json());

//usar las rutas
app.use("/tasks", tasksRoutes);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
