---
title: "`-webkit-mask-position-y` CSS property"
short-title: -webkit-mask-position-y
slug: Web/CSS/Reference/Properties/-webkit-mask-position-y
l10n:
  sourceCommit: 22c0b3059ff71d769af670478cc41605581108d1
---

{{Non-standard_header}}

Die CSS-Eigenschaft `-webkit-mask-position-y` legt die anfängliche vertikale Position eines Maskenbilds fest.

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

Diese Eigenschaft wird als ein oder mehrere durch Kommas getrennte Werte angegeben:

- `<length-percentage>`
  - : Eine Länge, die die Position der oberen Seite des Bilds relativ zur oberen Padding-Kante der Box angibt. Prozentwerte werden relativ zur vertikalen Dimension des Padding-Bereichs der Box berechnet. Ein Wert von `0%` bedeutet, dass die obere Kante des Bilds an der oberen Padding-Kante der Box ausgerichtet ist, und ein Wert von `100%` bedeutet, dass die untere Kante des Bilds an der unteren Padding-Kante der Box ausgerichtet ist.
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

### Vertikale Positionierung eines Maskenbilds

```css
.exampleOne {
  -webkit-mask-image: url("mask.png");
  -webkit-mask-position-y: bottom;
}

.exampleTwo {
  -webkit-mask-image: url("mask.png");
  -webkit-mask-position-y: 25%;
}
```

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask-position", "-webkit-mask-position")}}
- {{cssxref("-webkit-mask-position-x")}}
- {{cssxref("mask-origin", "-webkit-mask-origin")}}
