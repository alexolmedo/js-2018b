/**
 * Rol.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    nombre: {
      type: 'string',
      unique: true,
    },
    usuarios:{
      collection: 'usuario',
      via: 'rol',
      through: 'rolesporusuario'
    },
  },

};

