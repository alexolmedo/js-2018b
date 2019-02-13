/**
 * Auto.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    chasis:{
      type: 'number',
      isInteger: true,
      required: true,
    },
    nombreMarca:{
      type: 'String',
      required: true
    },
    colorUno:{
      type: 'String',
      required: true
    },
    colorDos:{
      type: 'String',
      required: true
    },
    nombreModelo:{
      type: 'String',
      required: true
    },
    anio: {
      type: 'number',
      isInteger: true,
      required: true
    },
    conductor:{
      model: 'conductor',
      required: true
    },
    // eventoAuto:{
    //   collection: 'EventoPorAuto',
    //   via: 'idAuto'
    // },
  },
};
