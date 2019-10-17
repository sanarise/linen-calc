import _ from 'lodash';
import getFabricSpecs from '../fabric-parser';

const getMagicFlapDepth = width => Math.round(width * 30 / 70);

const getFlangeAlong = flangeJson => flangeJson.byWidth || flangeJson.around || 0;
const getFlangeAcross = flangeJson => flangeJson.byHeight || flangeJson.around || 0;

export default (json) => {
  const fabricSpecs = getFabricSpecs(json.fabricId);

  const flapDepth = _.isUndefined(json.flap) ? getMagicFlapDepth(json.width) : json.flap;
  // TODO Подгибка которая может от чего-то зависеть
  const hem = 5;
  const hemSum = fabricSpecs.rough ? hem + 1.5 : hem * 2;
  const flangeAlong = json.flange ? getFlangeAlong(json.flange) : 0;
  const along = json.width * 2 * fabricSpecs.shrinkCoefAlong
    + flapDepth + 3 + hemSum + flangeAlong;

  const flangeAcross = json.flange ? getFlangeAcross(json.flange) : 0;
  const flangeAcrossMargin = flangeAcross ? 2 : 3;
  const across = (json.height + flangeAcrossMargin + flangeAcross * 2) * fabricSpecs.shrinkCoefAcross;

  return {
    type: 'pillow',
    fabric: json.fabricId,
    along,
    across,
  };
};
