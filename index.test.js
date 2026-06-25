const test = require('node:test');
const assert = require('node:assert');
const { add, greet } = require('../index');

test('add() adds two numbers correctly', () => {
  assert.strictEqual(add(2, 3), 5);
  assert.strictEqual(add(-1, 1), 0);
});

test('greet() returns the correct greeting', () => {
  assert.strictEqual(greet('CI/CD'), 'Hello, CI/CD!');
});