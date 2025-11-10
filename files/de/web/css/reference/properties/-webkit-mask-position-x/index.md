---
title: -webkit-mask-position-x
slug: Web/CSS/Reference/Properties/-webkit-mask-position-x
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{Non-standard_header}}

Die CSS-Eigenschaft `-webkit-mask-position-x` legt die initiale horizontale Position eines Maskenbildes fest.

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
  - : Eine Länge, die die Position des linken Rands des Bildes relativ zum linken Innenabstandrand des Kastens angibt. Prozentsätze werden in Bezug auf die horizontale Dimension des Innenabstandsbereichs des Kastens berechnet. Das bedeutet, dass ein Wert von `0%` den linken Rand des Bildes mit dem linken Innenabstandrand des Kastens ausrichtet und ein Wert von `100%` den rechten Rand des Bildes mit dem rechten Innenabstandrand des Kastens ausrichtet.
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

### Horizontale Positionierung eines Maskenbildes

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

Kein Bestandteil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

{{cssxref("mask-position", "-webkit-mask-position")}}, {{cssxref("-webkit-mask-position-y")}}, {{cssxref("mask-origin", "-webkit-mask-origin")}}
