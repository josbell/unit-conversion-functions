import * as functions from 'firebase-functions';
import { GetConvertedValueRequest } from './model';
const convert = require('convert-units');

const convertHandler = async (
  data: GetConvertedValueRequest,
  _context: functions.https.CallableContext
) => {
  const { startingValue, startingUnit, convertedUnit } = data;
  let convertedValue: number;
  try {
    convertedValue = convert(startingValue)
      .from(startingUnit)
      .to(convertedUnit);
    return { status: 'success', convertedValue };
  } catch (error) {
    functions.logger.error(error);
    return { status: 'error', error };
  }
};

export default convertHandler;
