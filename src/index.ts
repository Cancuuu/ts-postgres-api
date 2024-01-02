import express from 'express'

const PORT_NUMBER = 4000
const app = express();

app.listen(PORT_NUMBER)

console.log(`SERVER ON PORT ${PORT_NUMBER}`);
