import {createPool} from 'mysql2/promise'

const connectionDB = createPool({
    host: 'localhost',
    port: 3306,
    database: 'tasks_db',
    user: 'root',
    password: '210797',
})

export default connectionDB