/**
 * @name exports
 * @static
 * @summary Arguments for the capabilitystatement query
 */
module.exports = {
  date: {
    type: 'date',
    fhirtype: 'date',
    xpath: 'CapabilityStatement.date',
    definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-date',
    description: 'The capability statement publication date',
  },
  description: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'CapabilityStatement.description',
    definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-description',
    description: 'The description of the capability statement',
  },
  event: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'CapabilityStatement.messaging.event.code',
    definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-event',
    description: 'Event code in a capability statement',
  },
  fhirversion: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'CapabilityStatement.version',
    definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-fhirversion',
    description: 'The version of FHIR',
  },
  format: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'CapabilityStatement.format',
    definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-format',
    description: 'formats supported (xml | json | ttl | mime type)',
  },
  guide: {
    type: 'uri',
    fhirtype: 'uri',
    xpath: 'CapabilityStatement.implementationGuide',
    definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-guide',
    description: 'Implementation guides supported',
  },
  jurisdiction: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'CapabilityStatement.jurisdiction',
    definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-jurisdiction',
    description: 'Intended jurisdiction for the capability statement',
  },
  mode: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'CapabilityStatement.rest.mode',
    definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-mode',
    description: 'Mode - restful (server/client) or messaging (sender/receiver)',
  },
  name: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'CapabilityStatement.name',
    definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-name',
    description: 'Computationally friendly name of the capability statement',
  },
  publisher: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'CapabilityStatement.publisher',
    definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-publisher',
    description: 'Name of the publisher of the capability statement',
  },
  resource: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'CapabilityStatement.rest.resource.type',
    definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-resource',
    description: 'Name of a resource mentioned in a capability statement',
  },
  'resource-profile': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'CapabilityStatement.rest.resource.profile',
    definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-resource-profile',
    description: 'A profile id invoked in a capability statement',
  },
  'security-service': {
    type: 'token',
    fhirtype: 'token',
    xpath: 'CapabilityStatement.rest.security.service',
    definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-security-service',
    description: 'OAuth | SMART-on-FHIR | NTLM | Basic | Kerberos | Certificates',
  },
  software: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'CapabilityStatement.software.name',
    definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-software',
    description: 'Part of a the name of a software application',
  },
  status: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'CapabilityStatement.status',
    definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-status',
    description: 'The current status of the capability statement',
  },
  'supported-profile': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'CapabilityStatement.profile',
    definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-supported-profile',
    description: 'Profiles for use cases supported',
  },
  title: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'CapabilityStatement.title',
    definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-title',
    description: 'The human-friendly name of the capability statement',
  },
  url: {
    type: 'uri',
    fhirtype: 'uri',
    xpath: 'CapabilityStatement.url',
    definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-url',
    description: 'The uri that identifies the capability statement',
  },
  version: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'CapabilityStatement.version',
    definition: 'http://hl7.org/fhir/SearchParameter/CapabilityStatement-version',
    description: 'The business version of the capability statement',
  },
};