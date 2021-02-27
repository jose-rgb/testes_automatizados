import { Connection, createConnection, getConnection, getConnectionOptions } from "typeorm";

export default async (): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions();

    return createConnection(
        //usar BD de teste ou o padrão
        Object.assign(defaultOptions, {
            database:
                process.env.NODE_ENV === "test"
                    ? "./src/database/database.test.sqlite"
                    : defaultOptions.database,
        })
    );
};

//if ternário (? :)