# \<kemet-carousel>

## Installation
```bash
npm i @kemet/kemet-carousel
```

## Usage
```js
  import 'kemet-carousel/kemet-carousel.js';
  import 'kemet-carousel/kemet-carousel-slide.js';
  import 'kemet-carousel/kemet-carousel-next.js';
  import 'kemet-carousel/kemet-carousel-prev.js';
  import 'kemet-carousel/kemet-carousel-link.js';
```

```html
<kemet-carousel>
  <div slot="slides">
    <kemet-carousel-slide>Slide One</kemet-carousel-slide>
    <kemet-carousel-slide>Slide Two</kemet-carousel-slide>
    <kemet-carousel-slide>Slide Three</kemet-carousel-slide>
  </div>
  <div slot="pagination">
    <kemet-carousel-prev>Prev</kemet-carousel-prev>
    <kemet-carousel-link slide="0">1</kemet-carousel-link>
    <kemet-carousel-link slide="1">2</kemet-carousel-link>
    <kemet-carousel-link slide="2">3</kemet-carousel-link>
    <kemet-carousel-next>Next</kemet-carousel-next>
  </div>
</kemet-carousel>
```

[Click here](http://kemet.online/carousel) for more docs.
