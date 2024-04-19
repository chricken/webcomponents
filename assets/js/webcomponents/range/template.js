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

const elGrab = document.createElement('div');
elGrab.className = 'sliderGrab grab';
elBar.append(elGrab);

const elText = document.createElement('input');
elText.type='number';
elText.value = settings.value;

elGrab.addEventListener('mousedown', evt => {
    settings.startX = evt.layerX;
})

export default template;