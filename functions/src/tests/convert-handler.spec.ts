import convertHandler from '../convert-handler';
import { assert } from 'chai';
import * as functions from 'firebase-functions';
import { GetConvertedValueRequest } from '../model';

describe('Convert Handler', () => {
  it('should return success object when inputs are correct', () => {
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

  it('should return error object when called with missing arguments', () => {
    const data = ({
      startingValue: null,
      startingUnit: null,
      convertedUnit: 'oz',
    } as any) as GetConvertedValueRequest;
    const context = {} as functions.https.CallableContext;
    return convertHandler(data, context).then((val) => {
      assert.deepEqual(val.status, 'error');
    });
  });

  it('should return error object when called with invalid arguments', () => {
    const data = ({
      startingValue: 6,
      startingUnit: 'K',
      convertedUnit: 'oz',
    } as any) as GetConvertedValueRequest;
    const context = {} as functions.https.CallableContext;
    return convertHandler(data, context).then((val) => {
      assert.deepEqual(val.status, 'error');
    });
  });
});
