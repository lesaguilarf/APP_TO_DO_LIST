import express from 'express'
import {getTasks, postTasks, putTasks, deleteTasks} from './DataBase/consultation-tasks.js'

const app = express()
app.use(express.json())

app.get('/tasks', async (req,res) => {
    const result = await getTasks()
    console.log(result);
    res.json(result)
})

app.post('/tasks', async (req,res) => {
    const result = await postTasks(req.body.title)
    console.log(result);
    res.json(result)
})

app.put('/tasks/:id', async (req,res) => {
    const result = await putTasks(req.body.title, req.params.id)
    console.log(result);
    res.json(result)
})

app.delete('/tasks/:id', async (req,res) => {
    const result = await deleteTasks(req.params.id)
    console.log(result);
    res.json(result)
})

app.listen(3000, () => {console.log('Servidor corriendo en http://localhost:3000')})