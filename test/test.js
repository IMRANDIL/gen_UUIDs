const assert = require('assert');
const generateUUID = require('../lib/index');

describe('UUID Generation', function() {
  it('should generate unique UUIDs', function() {
    const uuid1 = generateUUID();
    const uuid2 = generateUUID();

    assert.notStrictEqual(uuid1, uuid2, 'Generated UUIDs should be unique');
  });

  it('should generate valid UUID format', function() {
    const uuid = generateUUID();
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/;

    assert(uuidRegex.test(uuid), 'Generated UUID should match UUID format');
  });
});
