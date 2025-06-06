import { registerAs } from "@nestjs/config";
import * as path from "path";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export default registerAs(
    'dbconfig.dev',
    (): PostgresConnectionOptions => {

        const databaseUrl = process.env.DATABASE_URL;

        if (!databaseUrl) {
            throw new Error("DATABASE_URL environment variable is not set");
        }

        return {
            type: "postgres",
            url: databaseUrl,
            entities: [path.resolve(__dirname, "..") + "/**/*.entity{.ts,.js}"],
            synchronize: true
        }
    }
);