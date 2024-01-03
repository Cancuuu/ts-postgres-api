import {Pool} from "pg"

export const pool = new Pool({
  user: "cancuethereum",
  host: "192.168.100.141",
  password: "",
  database: "tsapi",
  port: 5432
});

