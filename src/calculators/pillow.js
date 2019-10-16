import fabricTypes from '../../data/fabric-types.json';

export default (json) => {
  return [{
    type: 'pillow',
    fabric: json.fabric,
    along: json.width,
    across: json.height
  }, {
    type: 'pillow',
    fabric: json.fabric,
    along: json.width + 1,
    across: json.height + 1
  }];
};
