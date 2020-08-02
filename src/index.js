let a = require('./js/a.js')
import b from './js/b.js';
import './index.css'
import pic from './pic.png';

import * as e from './js/es6-export';
// console.log(require('./js/es6-export'));
console.log(e.default);


console.log('sfs - hello webpack ' + `${a}-${b} sdfsdsdfsf`);

let div = document.createElement('div');
div.className = 'index';
document.body.append(div);

console.log('123sdghjjjjjjjjjjjjjjjjjjjjjjsjsjkkkkkkkkkjjjjjjjjkkkkkkkkkkkkkkkkkkkkkkk');

let img = document.createElement('img');
img.src = pic;
document.body.append(img);