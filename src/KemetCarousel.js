/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { html, css, LitElement } from 'lit-element';

export class KemetCarousel extends LitElement {
  static get styles() {
    return css`
      :host,
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      :host {
        position: relative;
        display: block;
        width: var(--kemet-carousel-width, 100%);
        height: var(--kemet-carousel-height, 50vh);
        overflow: visible;
      }

      :host([hidden]) {
        display: none;
      }

      .slides {
        display: block;
        position: relative;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
    `;
  }

  static get properties() {
		return {
			index: {
        type: Number,
        reflect: true
      },
			__animating: {
        type: Boolean,
        defaultValue: true,
        reflect: false
      }
		};
	}

  constructor() {
    super();

    // managed properties
    this.index = 0;
    this.__animating = false;

    // standard properties
    this.slides = [];
    this.links = [];
		this.loaded = false;

    // bindings
    this.addEventListener('kemet-carousel-next', this.handleNext.bind(this));
    this.addEventListener('kemet-carousel-prev', this.handlePrev.bind(this));
    this.addEventListener('kemet-carousel-link', this.handleLink.bind(this));
  }

  handleSlotChange() {
    let elementIndex = 0;
    const slides = this.querySelectorAll('kemet-carousel-slide');
    const links = this.querySelectorAll('kemet-carousel-link');

    links.forEach(link => {
      this.links.push(link);
    });

    // populdate slide array
    slides.forEach(slide => {
      slide.seen = this.index > elementIndex;

      this.slides.push({
        content: slide
      });

      elementIndex += 1;
    });

		// run only once as an init
		if (!this.loaded) {
			this.loaded = true;
			this.index = 0;
			this.updateIndex(this.index);
    }

		this.__animating = false;
  }

  render() {
    return html`
		  <div class="slides">
		  	<slot name="slides" @slotchange="${this.handleSlotChange}"></slot>
      </div>

      <div class="pagination">
        <slot name="pagination"></slot>
      </div>
    `;
  }

  handleNext() {
    let newIndex = this.index + 1;

    // reset to first slide
		if (newIndex >= this.slides.length) newIndex = 0;

		this.updateIndex(newIndex);
  }

  handlePrev() {
    let newIndex = this.index - 1;

    // send them to the last slide
		if (newIndex < 0) newIndex = this.slides.length - 1;

		this.updateIndex(newIndex);
  }

  updateIndex(newIndex) {
		this.__animating = true;
    let currentSlide = this.slides[this.index];
    const currentLink = this.links[newIndex];

    // remove selected from all links
    this.links.forEach(link => {
      link.selected = false;
    });

    // add selected to current link
    currentLink.selected = true;

    // currentSlide can be undefined
		if (currentSlide) {
      currentSlide.content.addEventListener("transitionend", this.handleTransitionEnd);
			currentSlide.content.classList.add("out");
      currentSlide.content.setAttribute("aria-hidden", "true");
    }

    // correct for wrong index entered by users
    if(newIndex > -1 && newIndex < this.slides.length) {
      this.index = newIndex;
    } else {
      this.index = 0;
    }

    // update new slide
    currentSlide = this.slides[this.index];
    currentSlide.content.setAttribute("aria-hidden", "false");
  }

  handleTransitionEnd(event) {
		event.target.classList.remove("out");
		event.target.removeEventListener("transitionend", this.handleTransitionEnd);
		this.__animating = false;
  }

  handleLink(event) {
    this.updateIndex(event.detail.slide);
  }
}