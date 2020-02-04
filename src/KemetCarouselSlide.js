import { html, css, LitElement } from 'lit-element';

export class KemetCarouselSlide extends LitElement {
	static get styles() {
		return [
      css`
        :host,
				:host *,
				:host *::before,
				*::after {
					box-sizing: border-box;
				}

				:host {
					position: absolute;
					contain: content;
					box-sizing: border-box;
					display: block;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
				}

        :host([aria-hidden="false"]) {
					transition: transform 0.3s 0.1s;
					transform: translate(0, 0);
				}

        :host([aria-hidden="true"]) {
					transform: translate(-100%, 0);
				}

        :host([aria-hidden="true"].out) {
					transform: translate(100%, 0);
					transition: transform 0.3s 0.101s, opacity 0.001s.3s;
				}

        :host([aria-hidden="true"][vertical]) {
					transform: translate(0, -100%);
				}

        :host([aria-hidden="true"][vertical].out) {
					transform: translate(0, 100%);
				}
			`
		];
	}

	static get properties() {
		return {
			seen: {
        type: Number
      },
			"aria-hidden": {
        type: String,
        reflect: true
      }
		};
	}

	constructor() {
		super();
		this.seen = false;
		this["aria-hidden"] = "true";
	}

  render() {
		return html`
			<slot></slot>
		`;
	}
}
