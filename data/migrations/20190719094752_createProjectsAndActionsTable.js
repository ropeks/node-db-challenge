
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('name', 128).notNullable();
        tbl.string('description', 256).notNullable();
        tbl.boolean('completed').notNullable().defaultTo(false);
    })
    .createTable('actions', tbl => {
        tbl.increments();
        tbl.string('notes', 256).notNullable();
        tbl.string('description', 256).notNullable();
        tbl.boolean('completed').notNullable().defaultTo(false);
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects');
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('projects')
        .dropTableIfExists('actions');
};
