# \<kemet-carousel>

[Go here to demo Kemet components](https://kemet-components.stackblitz.io).

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

## Linting with ESLint, Prettier, and Types
To scan the project for linting errors, run
```bash
npm run lint
```

You can lint with ESLint and Prettier individually as well
```bash
npm run lint:eslint
```
```bash
npm run lint:prettier
```

To automatically fix many linting errors, run
```bash
npm run format
```

You can format using ESLint and Prettier individually as well
```bash
npm run format:eslint
```
```bash
npm run format:prettier
```

## Testing with Karma
To run the suite of karma tests, run
```bash
npm run test
```
or to run them in compatibility mode for legacy browsers
```bash
npm run test:compatibility
```

To run the tests in watch mode (for <abbr title="test driven development">TDD</abbr>, for example), run

```bash
npm run test:watch
```
or
```bash
npm run test:compatibility
```

## Testing with Karma via BrowserStack
To run the suite of karma tests in BrowserStack, run
```bash
npm run test:bs
```

## Managing Test Snapshots
You can manage the test snapshots using
```bash
npm run test:update-snapshots
```
or
```bash
npm run test:prune-snapshots
```

## Demoing with Storybook
To run a local instance of Storybook for your component, run
```bash
npm run storybook
```

To build a production version of Storybook, run
```bash
npm run storybook:build
```


## Local Demo with `es-dev-server`
```bash
npm start
```
To run a local development server that serves the basic demo located in `demo/index.html`

```bash
npm start:compatibility
```
To run a local development server in compatibility mode for older browsers that serves the basic demo located in `demo/index.html`
