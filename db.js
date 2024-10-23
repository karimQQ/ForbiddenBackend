import postgres from "postgres";

const sql = postgres({
    host: 'localhost',
    port: 5432,
    database: 'forbidden_gdz',
    username: 'userdb',
    password: '1234'
})

export default sql