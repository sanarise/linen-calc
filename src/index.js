import _ from 'lodash';
import fs from 'fs';
import getCalculator from './calculators';

const calcLinen = (inputPath) => {
  const inputJson = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));

  const outputJson = inputJson.reduce((acc, productSpec) => {
    const productJson = getCalculator(productSpec.type)(productSpec);
    const count = _.isUndefined(productSpec.count) ? 1 : productSpec.count;
    return acc.concat(_.times(count, _.constant(productJson)));
  }, []);

  console.log(_.flatten(outputJson));
};
export default calcLinen;
