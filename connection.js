import mysql from "mysql2/promise"

const conection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '25012006',
    database: 'cinema'
})

export { conection }