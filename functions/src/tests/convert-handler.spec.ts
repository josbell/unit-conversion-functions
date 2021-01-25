import convertHandler from '../convert-handler';
import { assert } from 'chai';
import * as functions from 'firebase-functions';

describe('Convert Handler', () => {
  it('should return ', () => {
    const data = {
      startingValue: 5,
      startingUnit: 'lb',
      convertedUnit: 'oz',
    };
    const context = {} as functions.https.CallableContext;
    return convertHandler(data, context).then((val) => {
      assert.deepEqual(val, { status: 'success', convertedValue: 80 });
    });
  });
});
