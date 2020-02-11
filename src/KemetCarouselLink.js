import { html, css, LitElement } from 'lit-element';

export class KemetCarouselLink extends LitElement {
  static get properties() {
    return {
      slide: {
        type: Number,
        reflect: true,
      },
      selected: {
        type: Boolean,
        reflect: true,
      },
      disabled: {
        type: Boolean,
        reflect: true,
      }
    }
  }

  static get styles() {
    return [
      css `
        :host(:not([selected])) {
          cursor: pointer;
        }

        :host([disabled]) {
          cursor: not-allowed;
        }
      `
    ]
  }

  render() {
		return html`
			<slot @click=${this.changed}></slot>
		`;
  }

  changed() {
    if(!this.disabled) {
      this.dispatchEvent(new CustomEvent('kemet-carousel-link', {
        bubbles: true,
        composed: true,
        detail: this,
      }));
    }
  }
}
