module.exports = {
  attributes: {
    nombre: {
      type: 'string',
      required: true,
      regex: /^[a-zA-Z\s]*$/i
    },
    correo:{
      type: 'string',
      required: true,
      unique: true,
      isEmail: true
    },
    password: {
      type: 'string',
      required: true,
      regex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/i,
      minLength: 8,
      maxLength: 16
    },
    fecha_nacimiento:{
      type: 'string',
      required: true,
      columnName: 'fecha_nacimiento'
    },
    roles:{
      collection: 'rol',
      via: 'usuario_id',
      through: 'rolesporusuario'
    },
    conductores:{
      collection: 'conductor',
      via: 'usuario'
    },
  },
};
