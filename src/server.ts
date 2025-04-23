import express, { Application } from "express";
import boxplotRoutes from "./routers/boxplot";

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use("/api", boxplotRoutes);

app.listen(PORT, () => {
  console.log(` ANDA CORRIENDO EL SERVER EN: http://localhost:${PORT}`);
});


//IDENTIFICACION-MENSAJE
//CAROLINA DE JESUS ORTEGA CEPEDA A01282386

//TAREA SEMANA SANTA BOVXPLOT
//cuartiles y esas cosas
