import * as functions from 'firebase-functions';
import convertHandler from './convert-handler';

export const getConvertedValue = functions.https.onCall(convertHandler);
