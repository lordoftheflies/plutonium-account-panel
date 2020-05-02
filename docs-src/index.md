---
layout: page.11ty.cjs
title: <plutonium-account-panel> ⌲ Home
---

# &lt;plutonium-account-panel>

`<plutonium-account-panel>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<plutonium-account-panel>` is just an HTML element. You can it anywhere you can use HTML!

```html
<plutonium-account-panel></plutonium-account-panel>
```

  </div>
  <div>

<plutonium-account-panel></plutonium-account-panel>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<plutonium-account-panel>` can be configured with attributed in plain HTML.

```html
<plutonium-account-panel name="HTML"></plutonium-account-panel>
```

  </div>
  <div>

<plutonium-account-panel name="HTML"></plutonium-account-panel>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<plutonium-account-panel>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name="lit-html";

render(html`
  <h2>This is a &lt;plutonium-account-panel&gt;</h2>
  <plutonium-account-panel .name=${name}></plutonium-account-panel>
`, document.body);
```

  </div>
  <div>

<h2>This is a &lt;plutonium-account-panel&gt;</h2>
<plutonium-account-panel name="lit-html"></plutonium-account-panel>

  </div>
</section>
