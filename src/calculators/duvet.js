import fabricTypes from '../../data/fabric-types.json';

export default (json) => {
  return {
    type: 'duvet',
    along: json.width,
    across: json.height
  };
};
