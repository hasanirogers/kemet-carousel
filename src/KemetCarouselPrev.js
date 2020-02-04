import { html, css, LitElement } from 'lit-element';

export class KemetCarouselPrev extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          cursor: pointer;
        }
      `
    ]
  }

  render() {
		return html`
			<slot @click=${this.prev}></slot>
		`;
  }

  prev() {
    this.dispatchEvent(new CustomEvent('kemet-carousel-prev', {
      bubbles: true,
      composed: true,
      detail: this,
    }))
  }
}
