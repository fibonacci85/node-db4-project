exports.seed = function(knex, Promise) {
    return knex('recipes').insert([
        {recipe_name: "Steamed Brocolli"}
        {recipe_name: "Rice"}
        {recipe_name: "Roasted Chicken Breast"}
    ])
}