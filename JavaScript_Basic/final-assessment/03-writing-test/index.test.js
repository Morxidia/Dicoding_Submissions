import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { sum } from './index.js';

describe('sum()', () => {
  test('adds two positive numbers correctly', () => {
    assert.equal(sum(2, 3), 5);
  });

  test('handles negative numbers', () => {
    assert.equal(sum(-1, -5), -6);
    assert.equal(sum(-2, 4), 2);
  });

  test('handles zero', () => {
    assert.equal(sum(0, 0), 0);
    assert.equal(sum(5, 0), 5);
  });

  test('handles floating point numbers', () => {
    assert.ok(Math.abs(sum(0.1, 0.2) - 0.3) < Number.EPSILON);
  });

  test('returns NaN when input contains NaN', () => {
    assert.ok(Number.isNaN(sum(NaN, 5)));
    assert.ok(Number.isNaN(sum(1, NaN)));
  });

});