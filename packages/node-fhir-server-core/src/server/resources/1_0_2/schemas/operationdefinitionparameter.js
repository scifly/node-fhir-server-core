/**
 * @name exports
 * @summary OperationDefinitionParameter Class
 */
module.exports = class OperationDefinitionParameter {
  constructor(opts) {
    // Create an object to store all props
    Object.defineProperty(this, '__data', { value: {} });

    // Define getters and setters as enumerable

    Object.defineProperty(this, '_id', {
      enumerable: true,
      get: () => this.__data._id,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._id = new Element(value);
      },
    });

    Object.defineProperty(this, 'id', {
      enumerable: true,
      get: () => this.__data.id,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.id = value;
      },
    });

    Object.defineProperty(this, 'extension', {
      enumerable: true,
      get: () => this.__data.extension,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Extension = require('./extension.js');
        this.__data.extension = Array.isArray(value)
          ? value.map((v) => new Extension(v))
          : [new Extension(value)];
      },
    });

    Object.defineProperty(this, 'modifierExtension', {
      enumerable: true,
      get: () => this.__data.modifierExtension,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Extension = require('./extension.js');
        this.__data.modifierExtension = Array.isArray(value)
          ? value.map((v) => new Extension(v))
          : [new Extension(value)];
      },
    });

    Object.defineProperty(this, '_name', {
      enumerable: true,
      get: () => this.__data._name,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._name = new Element(value);
      },
    });

    Object.defineProperty(this, 'name', {
      enumerable: true,
      get: () => this.__data.name,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.name = value;
      },
    });

    Object.defineProperty(this, '_use', {
      enumerable: true,
      get: () => this.__data._use,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._use = new Element(value);
      },
    });
    // valueSetReference: http://hl7.org/fhir/ValueSet/operation-parameter-use
    Object.defineProperty(this, 'use', {
      enumerable: true,
      get: () => this.__data.use,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.use = value;
      },
    });

    Object.defineProperty(this, '_min', {
      enumerable: true,
      get: () => this.__data._min,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._min = new Element(value);
      },
    });

    Object.defineProperty(this, 'min', {
      enumerable: true,
      get: () => this.__data.min,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.min = value;
      },
    });

    Object.defineProperty(this, '_max', {
      enumerable: true,
      get: () => this.__data._max,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._max = new Element(value);
      },
    });

    Object.defineProperty(this, 'max', {
      enumerable: true,
      get: () => this.__data.max,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.max = value;
      },
    });

    Object.defineProperty(this, '_documentation', {
      enumerable: true,
      get: () => this.__data._documentation,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._documentation = new Element(value);
      },
    });

    Object.defineProperty(this, 'documentation', {
      enumerable: true,
      get: () => this.__data.documentation,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.documentation = value;
      },
    });

    Object.defineProperty(this, '_type', {
      enumerable: true,
      get: () => this.__data._type,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._type = new Element(value);
      },
    });
    // valueSetReference: http://hl7.org/fhir/ValueSet/operation-parameter-type
    Object.defineProperty(this, 'type', {
      enumerable: true,
      get: () => this.__data.type,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.type = value;
      },
    });

    Object.defineProperty(this, 'profile', {
      enumerable: true,
      get: () => this.__data.profile,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.profile = new Reference(value);
      },
    });

    Object.defineProperty(this, 'binding', {
      enumerable: true,
      get: () => this.__data.binding,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let OperationDefinitionParameterBinding = require('./operationdefinitionparameterbinding.js');
        this.__data.binding = new OperationDefinitionParameterBinding(value);
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'OperationDefinitionParameter',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'OperationDefinitionParameter';
  }

  toJSON() {
    return {
      id: this.id,
      extension: this.extension && this.extension.map((v) => v.toJSON()),
      modifierExtension: this.modifierExtension && this.modifierExtension.map((v) => v.toJSON()),
      _name: this._name && this._name.toJSON(),
      name: this.name,
      _use: this._use && this._use.toJSON(),
      use: this.use,
      _min: this._min && this._min.toJSON(),
      min: this.min,
      _max: this._max && this._max.toJSON(),
      max: this.max,
      _documentation: this._documentation && this._documentation.toJSON(),
      documentation: this.documentation,
      _type: this._type && this._type.toJSON(),
      type: this.type,
      profile: this.profile && this.profile.toJSON(),
      binding: this.binding && this.binding.toJSON(),
    };
  }
};
