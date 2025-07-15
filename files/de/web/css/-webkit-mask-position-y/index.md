---
title: -webkit-mask-position-y
slug: Web/CSS/-webkit-mask-position-y
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}

Die CSS-Eigenschaft `-webkit-mask-position-y` legt die anfängliche vertikale Position eines Maskenbildes fest.

## Syntax

```css
/* Keyword values */
-webkit-mask-position-y: top;
-webkit-mask-position-y: center;
-webkit-mask-position-y: bottom;

/* <percentage> values */
-webkit-mask-position-y: 100%;
-webkit-mask-position-y: -50%;

/* <length> values */
-webkit-mask-position-y: 50px;
-webkit-mask-position-y: -1cm;

/* Multiple values */
-webkit-mask-position-y:
  50px,
  25%,
  -3em;

/* Global values */
-webkit-mask-position-y: inherit;
-webkit-mask-position-y: initial;
-webkit-mask-position-y: revert;
-webkit-mask-position-y: revert-layer;
-webkit-mask-position-y: unset;
```

### Werte

- `<length-percentage>`
  - : Eine Länge, die die Position der oberen Seite des Bildes relativ zur oberen Polsterkante des Rahmens angibt. Prozentsätze werden bezogen auf die vertikale Dimension des Rahmen-Polsterbereichs berechnet. Ein Wert von `0%` bedeutet, dass die obere Kante des Bildes mit der oberen Polsterkante des Rahmens ausgerichtet ist, und ein Wert von `100%` bedeutet, dass die untere Kante des Bildes mit der unteren Polsterkante des Rahmens ausgerichtet ist.
- `top`
  - : Entspricht `0%`.
- `bottom`
  - : Entspricht `100%`.
- `center`
  - : Entspricht `50%`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`-webkit-mask-position-y = [ <length-percentage> | top | center | bottom ]#`)}}

## Beispiele

### Vertikale Positionierung eines Maskenbildes

```css
.exampleOne {
  -webkit-mask-image: url(mask.png);
  -webkit-mask-position-y: bottom;
}

.exampleTwo {
  -webkit-mask-image: url(mask.png);
  -webkit-mask-position-y: 25%;
}
```

## Spezifikationen

Kein Bestandteil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

{{cssxref("mask-position", "-webkit-mask-position")}}, {{cssxref("-webkit-mask-position-x")}}, {{cssxref("mask-origin", "-webkit-mask-origin")}}
