module.exports = {
    components: {
      schemas: {
        Task: { 
          type: 'object',
          properties: {
            _id: {
              type: 'string',
              description: 'ID de la tarea',
              example: '6201064b0028de786dc4'
            },
            title: {
              type: 'string',
              description: 'El título de la tarea',
              example: 'Tarea 1'
            },
            completed: {
              type: 'boolean',
              description: 'Indica si la tarea está completada o no',
              example: 'false'
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Fecha de creación de la tarea'
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Fecha de última actualización de la tarea'
            }
          },
          required: ['title'] 
        }
      }
    }
  };
  