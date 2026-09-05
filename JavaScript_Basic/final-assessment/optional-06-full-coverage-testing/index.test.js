import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { sum } from './sum.js';

describe('sum()', () => {
  test('adds two positive numbers correctly', () => {
    assert.equal(sum(2, 3), 5);
  });

  test('handles negative numbers', () => {
    assert.equal(sum(-1, -5), 0);
    assert.equal(sum(-2, 4), 0);
  });

  test('handles zero', () => {
    assert.equal(sum(0, 0), 0);
    assert.equal(sum(5, 0), 5);
  });

  test('handles non number', () => {
    assert.equal(sum('abc', 0), 0);
    assert.equal(sum(5, 'abc'), 0);
  });

  test('handles floating point numbers', () => {
    assert.ok(Math.abs(sum(0.1, 0.2) - 0.3) < Number.EPSILON);
  });
});