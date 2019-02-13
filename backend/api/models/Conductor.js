/**
 * Conductor.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombres: {
      type: 'String',
      required: true,
    },
    apellidos: {
      type: 'String',
      required: true
    },
    fechaNacimiento: {
      type: 'String',
      required: true
    },
    numeroAutos: {
      type: 'number',
      columnType: 'int',
      defaultsTo: 0
    },
    licenciaValida: {
      type: 'boolean',
      defaultsTo: false
    },
    usuario:{
      model: 'usuario',
      required: true
    },
    // auto:{
    //   collection: 'Auto',
    //   via: 'idConductor'
    // },

  },

};

