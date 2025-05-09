import express from 'express'

const app = express()

app.get('/tasks', (req,res) => {res.send('Listar Tareas')})

app.post('/tasks', (req,res) => {res.send('Crear Tareas')})

app.put('/tasks/:id', (req,res) => {res.send('Actualizar Tareas ' + req.params.id)})

app.delete('/tasks/:id', (req,res) => {res.send('Eliminar Tareas ' + req.params.id)})

app.listen(3000, () => {console.log('Servidor corriendo en http://localhost:3000')})