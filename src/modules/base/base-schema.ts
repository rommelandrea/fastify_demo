import SchemaInterface from './schema-interface';

/**
 *
 *
 * @export
 * @class BaseSchema
 * @implements {SchemaInterface}
 */
export default class BaseSchema implements SchemaInterface {
  public properties = {};

  public required: string[] = [];

  public errorProperties = {
    statusCode: {
      type: 'number',
      nullable: false,
    },
    error:
    {
      type: 'string',
      nullable: false,
    },
    message:
    {
      type: 'string',
      nullable: false,
    },
  };

  /**
   *
   *
   * @readonly
   * @memberof BaseSchema
   */
  get getOneSchema() {
    return {
      tags: [this.constructor.name],
      params:
      {
        type: 'object',
        properties: {
          id: { type: 'string', nullable: false },
        },
        required: ['id'],
      },
      response: {
        200: {
          type: 'object',
          properties: this.properties,
        },
        404: {
          type: 'object',
          properties: this.errorProperties,
        },
        500: {
          type: 'object',
          properties: this.errorProperties,
        },
      },
    };
  }

  /**
   *
   *
   * @readonly
   * @memberof BaseSchema
   */
  get getAllSchema() {
    return {
      tags: [this.constructor.name],
      response: {
        200: {
          type: 'array',
          items: {
            type: 'object',
            properties: this.properties,
          },
        },
        500: {
          type: 'object',
          properties: this.errorProperties,
        },
      },
    };
  }

  /**
   *
   *
   * @readonly
   * @memberof BaseSchema
   */
  get createSchema() {
    return {
      tags: [this.constructor.name],
      body: {
        type: 'object',
        required: this.required,
        properties:
          this.properties,
      },
      response: {
        201: {
          type: 'object',
          properties: this.properties,
        },
        400: {
          type: 'object',
          properties: this.errorProperties,
        },
        500: {
          type: 'object',
          properties: this.errorProperties,
        },
      },
    };
  }

  /**
   *
   *
   * @readonly
   * @memberof BaseSchema
   */
  get updateSchema() {
    return {
      tags: [this.constructor.name],
      params:
      {
        type: 'object',
        properties: {
          id: { type: 'string', nullable: false },
        },
        required: ['id'],
      },
      body: {
        type: 'object',
        required: this.required,
        properties:
          this.properties,
      },
      response: {
        200: {
          type: 'object',
          properties: this.properties,
        },
        400: {
          type: 'object',
          properties: this.errorProperties,
        },
        404: {
          type: 'object',
          properties: this.errorProperties,
        },
        500: {
          type: 'object',
          properties: this.errorProperties,
        },
      },
    };
  }

  /**
   *
   *
   * @readonly
   * @memberof BaseSchema
   */
  get deleteSchema() {
    return {
      tags: [this.constructor.name],
      params:
      {
        type: 'object',
        properties: {
          id: { type: 'string', nullable: false },
        },
        required: ['id'],
      },
      response: {
        200: {
          type: 'object',
          properties: { _id: { type: 'string' } },
        },
        400: {
          type: 'object',
          properties: this.errorProperties,
        },
        404: {
          type: 'object',
          properties: this.errorProperties,
        },
        500: {
          type: 'object',
          properties: this.errorProperties,
        },
      },
    };
  }
}
