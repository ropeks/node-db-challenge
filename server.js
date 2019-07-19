const express = require('express');
const db = require('./data/projects-model.js');
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.json({ message: 'welcome to the projects API' });
});

server.get('/api/projects/:id', async (req, res) => {
    const project = await db.getProject(req.params.id);
    const actions = await db.getActions(req.params.id);
    res.json({
        "id": project[0].id,
        "name": project[0].name,
        "description": project[0].description,
        "completed": project[0].completed,
        "actions": actions[0] 
    });
})

server.post('/api/projects', async (req, res) => {
    const projectIdArr = await db.addProject({ ...req.body, completed: 0 })
    const project = await db.getProject(projectIdArr[0]);
    res.json(project);
})

server.post('/api/projects/:id/actions', async (req, res) => {
    const { body, params } = req;
    const actionIdArr = await db.addAction({ ...body, completed: 0, project_id: params.id })
    const action = await db.getActions(actionIdArr[0]);
    res.json(action);
})


module.exports = server;