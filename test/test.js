const assert = require('assert');
const generateUUID = require('../lib/index');


describe('UUID Generation', function() {
  it('should generate unique UUIDs', function() {
    const uuid1 = generateUUID();
    const uuid2 = generateUUID();

    assert.notStrictEqual(uuid1, uuid2, 'Generated UUIDs should be unique');
  });

  // it('should generate valid UUID format', function() {
  //   const uuid = generateUUID();
  //   console.log('uuid>>>>>>>>', uuid)
  //   const uuidRegex = /^b2affb09\-2d28\-4320\-55c1\-3436bfa7528618f46c2611a$/;

  //   assert(uuidRegex.test(uuid), 'Generated UUID should match UUID format');
  // });
});
