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
        table, th, td {
            border: 1px solid gray;
            border-collapse: collapse;
            width: 100%;
        }
        .image {
            width: 20%;
        }
        .description {
            width: 80%;
        }
        .image iron-image {
            align-content: center;
        }
      </style>
        <table class="table">
            <tr>
                <td class="image">
                    <iron-image fade src="{{image}}"
                </td>
                <td class="description">{{description}}</td>
            </tr>
        </table>
    `;
  }

  static get properties() {
    return {
      description: {
        type: String,
        value: 'chop-list-uic-item',
      },
      image: {
        type: String,
        value: 'resources/img/shopping-cart.svg'
      }
    };
  }
}

window.customElements.define('chop-list-uic-item', ChopListUicItem);
