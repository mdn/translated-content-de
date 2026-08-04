---
title: "`-webkit-mask-position-x` CSS property"
short-title: -webkit-mask-position-x
slug: Web/CSS/Reference/Properties/-webkit-mask-position-x
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

{{Non-standard_header}}

Die CSS-Eigenschaft `-webkit-mask-position-x` legt die anfängliche horizontale Position eines Maskenbildes fest.

## Syntax

```css
/* Keyword values */
-webkit-mask-position-x: left;
-webkit-mask-position-x: center;
-webkit-mask-position-x: right;

/* <percentage> values */
-webkit-mask-position-x: 100%;
-webkit-mask-position-x: -50%;

/* <length> values */
-webkit-mask-position-x: 50px;
-webkit-mask-position-x: -1cm;

/* Multiple values */
-webkit-mask-position-x:
  50px,
  25%,
  -3em;

/* Global values */
-webkit-mask-position-x: inherit;
-webkit-mask-position-x: initial;
-webkit-mask-position-x: revert;
-webkit-mask-position-x: revert-layer;
-webkit-mask-position-x: unset;
```

### Werte

- `<length-percentage>`
  - : Eine Länge, die die Position des linken Randes des Bildes relativ zum linken Rand des Box-Inhalts angibt. Prozentsätze werden in Bezug auf die horizontale Dimension der Box-Inhaltfläche berechnet. Das bedeutet, ein Wert von `0%` bedeutet, dass der linke Rand des Bildes mit dem linken Rand der Box-Inhaltfläche ausgerichtet ist, und ein Wert von `100%` bedeutet, dass der rechte Rand des Bildes mit dem rechten Rand der Box-Inhaltfläche ausgerichtet ist.
- `left`
  - : Entspricht `0%`.
- `center`
  - : Entspricht `50%`.
- `right`
  - : Entspricht `100%`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`-webkit-mask-position-x = [ <length-percentage> | left | center | right ]#`)}}

## Beispiele

### Horizontales Positionieren eines Maskenbildes

```css
.exampleOne {
  -webkit-mask-image: url("mask.png");
  -webkit-mask-position-x: right;
}

.exampleTwo {
  -webkit-mask-image: url("mask.png");
  -webkit-mask-position-x: 25%;
}
```

## Spezifikationen

Gehört zu keinem Standard.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask-position", "-webkit-mask-position")}}
- {{cssxref("-webkit-mask-position-y")}}
- {{cssxref("mask-origin", "-webkit-mask-origin")}}
