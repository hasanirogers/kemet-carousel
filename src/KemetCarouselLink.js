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
      }
    }
  }

  static get styles() {
    return [
      css `
        :host(:not([selected])) {
          cursor: pointer;
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
    this.dispatchEvent(new CustomEvent('kemet-carousel-link', {
      bubbles: true,
      composed: true,
      detail: this,
    }))
  }
}
