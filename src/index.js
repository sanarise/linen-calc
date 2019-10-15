import fs from 'fs';
import calculate from './calculator';

const calcLinen = inputPath => calculate(JSON.parse(fs.readFileSync(inputPath, 'utf-8')));

export default calcLinen;
