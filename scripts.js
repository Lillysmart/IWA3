// scripts.js

import {company} from '/configure.js';
console.log(company);

import {year }from '/Configure.js';

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message