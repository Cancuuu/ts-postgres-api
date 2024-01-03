import { Request, Response } from "express";
import {pool} from "../database";
import { QueryResult } from "pg";

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
  try {
    const dbresponse: QueryResult = await pool.query("SELECT * FROM users");
    return res.status(200).json(dbresponse.rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error");
  }
}

export const getUserById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id);
    const dbresponse: QueryResult = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return res.status(200).json(dbresponse.rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error");
  }
}

export const createUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const {name, email} = req.body;
    const response: QueryResult = await pool.query("INSERT INTO users (name, email) VALUES ($1, $2)", [name, email]);
    return res.json({
      message: "User created successfully",
      body: {
        user: {
          name,
          email
        }
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error");
  }
}

// export const updateUser = async (req: Request, res: Response): Promise<Response> => {
//   try {
//     const dbresponse: QueryResult = await pool.query("SELECT * FROM users");
//     return res.status(200).json(dbresponse.rows);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json("Internal server error");
//   }
// }