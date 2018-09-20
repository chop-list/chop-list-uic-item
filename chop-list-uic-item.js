import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-image/iron-image.js';


/**
 * `chop-list-uic-item`
 * UI component for presenting a list item
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ChopListUicItem extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        .item {
            font-family: "Helvetica Neue";
            font-size: 2em;
            color: darkslategrey;
            cursor: pointer;
        }
        div.item[checked] {
            text-decoration: line-through;
            color: lightgrey;
        }
      </style>
      <div class="item"  checked$="{{checked}}" on-click="toogleChecked"><slot></slot></div>
    `;
  }

  static get properties() {
    return {
      checked: {
        type: Boolean,
        default: false
      }
    };
  }

  toogleChecked() {
    this.checked = !this.checked;
  }
}

window.customElements.define('chop-list-uic-item', ChopListUicItem);
