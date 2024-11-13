---
title: mask-position
slug: Web/CSS/mask-position
l10n:
  sourceCommit: 759e230fb79ab6b333691262e089749d99104c25
---

{{CSSRef}}

Die **`mask-position`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die anfängliche Position fest, relativ zur Maskenpositionsschicht, die durch {{cssxref("mask-origin")}} definiert wird, für jedes definierte Maskenbild.

## Syntax

```css
/* Keyword values */
mask-position: top;
mask-position: bottom;
mask-position: left;
mask-position: right;
mask-position: center;

/* <position> values */
mask-position: 25% 75%;
mask-position: 0px 0px;
mask-position: 10% 8em;

/* Multiple values */
mask-position: top right;
mask-position:
  1rem 1rem,
  center;

/* Global values */
mask-position: inherit;
mask-position: initial;
mask-position: revert;
mask-position: revert-layer;
mask-position: unset;
```

Ein oder mehrere `<position>`-Werte, getrennt durch Kommas.

### Werte

- {{cssxref("&lt;position&gt;")}}
  - : Ein bis vier Werte, die eine 2D-Position in Bezug auf die Kanten des Box-Elements darstellen. Relative oder absolute Offsets können angegeben werden. Beachten Sie, dass die Position außerhalb der Box des Elements gesetzt werden kann.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Maskenposition einstellen

Klicken Sie auf "Play" im Live-Beispiel, um den Code im MDN-Playground zu öffnen und den `mask-position`-Wert auf einen der oben beschriebenen erlaubten Werte zu ändern.

```html live-sample___mask-position-example
<div id="wrapper">
  <div class="masked"></div>
</div>
```

```css live-sample___mask-position-example
#wrapper {
  border: 1px solid black;
  width: 250px;
  height: 250px;
}

.masked {
  width: 250px;
  height: 250px;
  margin-bottom: 10px;
  background: blue linear-gradient(red, blue);

  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
  mask-repeat: no-repeat;
  mask-position: top right;
}
```

{{EmbedLiveSample("mask-position-example", "", "300px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipping and Masking in CSS](https://css-tricks.com/clipping-masking-css/)
