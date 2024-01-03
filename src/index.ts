import express from 'express'
import indexRoutes from "./routes/index"

const PORT_NUMBER = 4000
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(indexRoutes);
app.listen(PORT_NUMBER);

console.log(`SERVER ON PORT ${PORT_NUMBER}`);
