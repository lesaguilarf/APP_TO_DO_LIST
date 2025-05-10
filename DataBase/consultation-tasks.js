import connectionDB from "./connect-DB.js"

async function getTasks(){
    try{
        const [rows] = await connectionDB.query("SELECT * FROM tasks")
        console.log(rows)
        return rows
    } catch(error){
        console.error(error);
    }
}

async function postTasks(title){
    try{
        const [rows] = await connectionDB.query(`INSERT INTO tasks (title) VALUES ('${title}')`)
        return rows
    } catch(error){
        console.error(error);
    }
}

async function putTasks(title,id){
    try{
        const [rows] = await connectionDB.query(`UPDATE tasks SET title = '${title}' WHERE id = ${id}`)
        return rows
    } catch(error){
        console.error(error);
    }
}

async function deleteTasks(id){
    try{
        const [rows] = await connectionDB.query(`DELETE FROM tasks WHERE id = ${id}`)
        return rows 
    } catch(error){
        console.error(error);
    }
}

export {getTasks,postTasks,putTasks,deleteTasks}


