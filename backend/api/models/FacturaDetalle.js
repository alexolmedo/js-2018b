module.exports = {
  attributes: {
    cantidad:{
      type: 'number',
      isInteger: true,
      required: true
    },
    precio:{
      type: 'number',
      isInteger: true,
      required: true
    },
    total:{
      type: 'number',
      isInteger: true,
      required: true
    },
    factura_cabecera:{
      model: 'facturacabecera',
      required: true
    }
  }
};
