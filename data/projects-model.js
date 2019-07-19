const knex = require('knex');
const db = knex(require('../knexfile').development);

function getProjects() {
    return db('projects');
}

function getProject(id) {
    return db('projects').where({ id });
}

function getActions(id) {
    return db('actions')
        .select('id', 'description', 'notes', 'completed')
        .where('actions.project_id', id);
}

function addProject({ name, description, completed }) {
    return db('projects').insert({ name, description, completed });
}

function addAction({ description, notes, completed, project_id }) {
    return db('actions').insert({ description, notes, completed, project_id })
}

module.exports = {
    getProjects,
    getProject,
    getActions,
    addProject,
    addAction
}