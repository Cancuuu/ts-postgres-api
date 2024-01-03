import {Pool} from "pg"

export const pool = new Pool({
  user: "cancuethereum",
  host: "localhost",
  password: "",
  database: "tsapi",
  port: 5432
});

