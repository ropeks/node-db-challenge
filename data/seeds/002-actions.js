
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 1, description: 'start the project', notes: 'this is hard', completed: false, project_id: 1},
        {id: 2, description: 'do the project', notes: 'this is hard', completed: false, project_id: 1},
        {id: 3, description: 'finish the project', notes: 'this is easy', completed: false, project_id: 1}
      ]);
    });
};
