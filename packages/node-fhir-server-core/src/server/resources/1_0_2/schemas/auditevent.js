/**
 * @name exports
 * @summary AuditEvent Class
 */
module.exports = class AuditEvent {
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

    Object.defineProperty(this, 'meta', {
      enumerable: true,
      get: () => this.__data.meta,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Meta = require('./meta.js');
        this.__data.meta = new Meta(value);
      },
    });

    Object.defineProperty(this, '_implicitRules', {
      enumerable: true,
      get: () => this.__data._implicitRules,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._implicitRules = new Element(value);
      },
    });

    Object.defineProperty(this, 'implicitRules', {
      enumerable: true,
      get: () => this.__data.implicitRules,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.implicitRules = value;
      },
    });

    Object.defineProperty(this, '_language', {
      enumerable: true,
      get: () => this.__data._language,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._language = new Element(value);
      },
    });

    Object.defineProperty(this, 'language', {
      enumerable: true,
      get: () => this.__data.language,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.language = value;
      },
    });

    Object.defineProperty(this, 'text', {
      enumerable: true,
      get: () => this.__data.text,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Narrative = require('./narrative.js');
        this.__data.text = new Narrative(value);
      },
    });

    Object.defineProperty(this, 'contained', {
      enumerable: true,
      get: () => this.__data.contained,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.contained = Array.isArray(value) ? value.map((v) => v) : [value];
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

    Object.defineProperty(this, 'event', {
      enumerable: true,
      get: () => this.__data.event,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let AuditEventEvent = require('./auditeventevent.js');
        this.__data.event = new AuditEventEvent(value);
      },
    });

    Object.defineProperty(this, 'participant', {
      enumerable: true,
      get: () => this.__data.participant,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let AuditEventParticipant = require('./auditeventparticipant.js');
        this.__data.participant = Array.isArray(value)
          ? value.map((v) => new AuditEventParticipant(v))
          : [new AuditEventParticipant(value)];
      },
    });

    Object.defineProperty(this, 'source', {
      enumerable: true,
      get: () => this.__data.source,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let AuditEventSource = require('./auditeventsource.js');
        this.__data.source = new AuditEventSource(value);
      },
    });

    Object.defineProperty(this, 'object', {
      enumerable: true,
      get: () => this.__data.object,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let AuditEventObject = require('./auditeventobject.js');
        this.__data.object = Array.isArray(value)
          ? value.map((v) => new AuditEventObject(v))
          : [new AuditEventObject(value)];
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'AuditEvent',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'AuditEvent';
  }

  toJSON() {
    return {
      resourceType: this.resourceType,
      id: this.id,
      meta: this.meta && this.meta.toJSON(),
      _implicitRules: this._implicitRules && this._implicitRules.toJSON(),
      implicitRules: this.implicitRules,
      _language: this._language && this._language.toJSON(),
      language: this.language,
      text: this.text && this.text.toJSON(),
      contained: this.contained,
      extension: this.extension && this.extension.map((v) => v.toJSON()),
      modifierExtension: this.modifierExtension && this.modifierExtension.map((v) => v.toJSON()),
      event: this.event && this.event.toJSON(),
      participant: this.participant && this.participant.map((v) => v.toJSON()),
      source: this.source && this.source.toJSON(),
      object: this.object && this.object.map((v) => v.toJSON()),
    };
  }
};