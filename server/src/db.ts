import { DataSource } from "typeorm";
import City from "./entity/City";
import Category from "./entity/Category";
import Place from "./entity/Place";
import User from "./entity/User";

export default new DataSource({
  type: "postgres",
  host:
    typeof process.env.DB_HOST === "undefined"
      ? "localhost"
      : process.env.DB_HOST,
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "postgres",
  synchronize: true,
  entities: [City, Category, Place, User],
  logging: ["query", "error"],
});
