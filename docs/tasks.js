const Task = require("../models/Task");

module.exports = {
    paths: {
      '/create': {
        post: {
          summary: 'Crea una nueva tarea',
          tags: ['Task'],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: "#/components/schemas/Task"
                }
              }
            }
          },
          responses: {
            201: {
              description: 'Tarea creada con éxito'
            },
            500: {
              description: 'Error en el servidor'
            }
          }
        }
      },
      '/': {
        get: {
          summary: 'Obtener todas las tareas',
          tags: ['Task'],
          responses: {
            200: {
              description: 'Lista de todas las tareas',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/Task'
                    }
                  }
                }
              }
            },
            500: {
              description: 'Error en el servidor'
            }
          }
        }
      },
      '/id/{_id}': {
        get: { 
          summary: 'Obtener uyna tarea por ID',
          tags: ['Task'],
          responses: {
            200: {
              description: 'Da la tarea correspondiente al ID',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/Task'
                    }
                  }
                }
              }
            },
            500: {
              description: 'Error en el servidor'
            }
          }
        }
      },
   '/id/{_id}': {
      put: {
        summary: 'Actualizar solo el título de una tarea',
        tags: ['Task'],
        parameters: [
          {
            name: '_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string'
            },
            description: 'ID de la tarea a actualizar'
          }
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  title: {
                    type: 'string',
                    description: 'El nuevo título de la tarea'
                  }
                },
                required: ['title']
              }
            }
          }
        },
        responses: {
          200: {
            description: 'Título de la tarea actualizado con éxito',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Task'
                }
              }
            }
          },
          400: {
            description: 'El título es obligatorio'
          },
          404: {
            description: 'Tarea no encontrada'
          },
          500: {
            description: 'Error en el servidor'
          }
        }
      }
    },
    '/id/:_id}': {
        delete: {
          summary: 'Elimina una tarea por ID',
          tags: ['Task'],
          parameters: [
            {
              name: '_id',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              },
              description: 'ID de la tarea a eliminar'
            }
          ],
          responses: {
            200: {
              description: 'Tarea eliminada con éxito',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      message: {
                        type: 'string',
                        example: 'Task eliminada.'
                      }
                    }
                  }
                }
              }
            },
            404: {
              description: 'Tarea no encontrada'
            },
            500: {
              description: 'Error en el servidor'
            }
          }
        }
      }
    }
  };
  