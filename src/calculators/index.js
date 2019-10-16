import calcPillow from './pillow';
import calcSheet from './sheet';
import calcDuvet from './duvet';

const productCalcs = {
  pillow: calcPillow,
  sheet: calcSheet,
  duvet: calcDuvet,
};

export default (productType) => {
  const calculator = productCalcs[productType];
  if (!calculator) {
    throw new Error(`Unknown product type: "${productType}"`);
  }
  return calculator;
};
