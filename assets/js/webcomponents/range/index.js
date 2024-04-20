'use strict';

import template from './template.js';
import settings from './settings.js';

class rangeSingle extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({
            mode: 'closed'
        })
        this.root.append(template.cloneNode(true));
    }

    // Nicht-String-Atribute übergeben
    setAttributes({ }) {
        this.render();
    }

    // Componente rendern
    render() {
        let container = this.root.querySelector('.container')
        template.className = 'container';
        container.innerHTML = ''
    }

    // Erwartete String-Attribute
    static get observedAttributes() {
        return ['my-attribute']
    }

    // Getter und Setter für String-Attribute
    get 'my-attribute'() {
        return this.getAttribute('my-attribute')
    }
    set 'my-attribute'(val) {
        this.setAttribute('my-attribute', val);
    }

    // Eventlistener für veränderte Attribute
    attributeChangedCallback(attrName, oldVal, currentVal) {
    }

    // Eventlistener für Mounting
    connectedCallback() {
        let elGrab = this.root.querySelector('.sliderGrab');
        let grabbing = false;

        document.body.addEventListener('mousemove', evt => {
            if (grabbing) {
                let currentX = evt.pageX;
                let difference = currentX - settings.startX;
                elGrab.style.transform = `translateX(${difference}px) translateY(-10px)`
                // console.log(difference);
            }
        })

        // elGrab.addEventListener('mousedown', evt => {
        elGrab.addEventListener('mousedown', evt => {
            grabbing = true
            settings.startX = evt.pageX;
        })
        document.body.addEventListener('mouseup', evt => {
            grabbing = false
        })

    }
    // Eventlistener für Unmounting
    disconnectedCallback() {
    }
}

customElements.define('range-single', rangeSingle);