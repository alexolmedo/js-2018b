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
      isInteger: true,
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
    auto:{
      collection: 'auto',
      via: 'conductor'
    },
  },
};
