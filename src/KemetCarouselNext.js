import { html, css, LitElement } from 'lit-element';

export class KemetCarouselNext extends LitElement {
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
			<slot @click=${this.next}></slot>
		`;
  }

  next() {
    this.dispatchEvent(new CustomEvent('kemet-carousel-next', {
      bubbles: true,
      composed: true,
      detail: this,
    }))
  }
}
