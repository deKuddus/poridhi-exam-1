# TO run this application

- First clone the repository
- next cd to server and run `pnpm install` && after complete the dependencies installation
- - create a `.env` file in the root of inside server and paste the following contents

    ````
    PORT=3333
    HOST=0.0.0.0
    NODE_ENV=development
    APP_KEY=tYUXghg6_YsD7NLBuWLNgUj0E1hQR-J2
    DRIVE_DISK=local
    DB_CONNECTION=mysql
    MYSQL_HOST=localhost
    MYSQL_PORT=3306
    MYSQL_USER=dbuser
    MYSQL_PASSWORD=dbpass or empty
    MYSQL_DB_NAME=dbname
    REDIS_CONNECTION=local
    REDIS_HOST=127.0.0.1
    REDIS_PORT=6379
    REDIS_PASSWORD=
    QUEUE_REDIS_HOST=127.0.0.1
    QUEUE_REDIS_PORT=6379
    QUEUE_REDIS_DB=0
    ```
    ````

    -- create your mysql database and put the credentials in .env file.
    -- then run the following command `node ace serve --watch`

- Secondly in another terminal cd frontend and run `pnpm install` && after complete the dependencies installation `pnpm run dev`.
