'use strict';

import settings from './settings.js';

const template = document.createElement('div');
template.className = 'container';
template.style.width = settings.width + 'px';

let path = new URL(import.meta.url).pathname;
path = `${path.substring(0, path.lastIndexOf('/') + 1)}styles.css`;
const elStyle = document.createElement('style');
elStyle.innerHTML = `@import "${path}"`;
template.append(elStyle);

const elBar = document.createElement('div');
elBar.className = 'sliderBar';
template.append(elBar);
elBar.style.marginRight = settings.textWidth + 30 + 'px';

const elGrab = document.createElement('div');
elGrab.className = 'sliderGrab grab';
elBar.append(elGrab);

const elText = document.createElement('input');
elText.type='number';
elText.className = 'sliderText';
elText.value = settings.value;
template.append(elText);
elText.style.width = settings.textWidth + 'px';


export default template;