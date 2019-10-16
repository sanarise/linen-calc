import _ from 'lodash';

const fabricFeatures = {
  'tencel 60x60': {
    shrinkCoefAlong: 0.975,
    shrinkCoefAcross: 0.99,
    rough: false,
  },
  'tencel 40x40': {
    // TODO
  },
  'tencel mix': {
    // TODO
  },
  'satin 60x60': {
    shrinkCoefAlong: 0.96,
    shrinkCoefAcross: 0.98,
    rough: false,
  },
  'satin 60x40': {
    shrinkCoefAlong: 0.96,
    shrinkCoefAcross: 0.98,
    rough: true,
  },
  'satin 40x40': {
    shrinkCoefAlong: 0.96,
    shrinkCoefAcross: 0.98,
    rough: true,
  },
  'satin twill': {
    // TODO
  },
};

const getFabricType = (fabricId) => {
  if (_.inRange(fabricId, 1000, 2000)) {
    return 'tencel 60x60';
  }
  if (_.inRange(fabricId, 2000, 3000)) {
    return 'tencel 40x40';
  }
  if (_.inRange(fabricId, 3000, 4000)) {
    return 'tencel mix';
  }
  if (_.inRange(fabricId, 4000, 5000)) {
    return 'satin 40x40';
  }
  if (_.inRange(fabricId, 5000, 6000)) {
    return 'satin 60x40';
  }
  if (_.inRange(fabricId, 6000, 7000)) {
    return 'satin 60x60';
  }
  if (_.inRange(fabricId, 7000, 8000)) {
    return 'satin twill';
  }
  throw new Error(`Unknown fabric Id: '${fabricId}'`);
};

export default fabricId => fabricFeatures[getFabricType(fabricId)];
