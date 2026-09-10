---
title: "`-webkit-mask-position-x` CSS property"
short-title: -webkit-mask-position-x
slug: Web/CSS/Reference/Properties/-webkit-mask-position-x
l10n:
  sourceCommit: 22c0b3059ff71d769af670478cc41605581108d1
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

Diese Eigenschaft wird als ein oder mehrere durch Kommas getrennte Werte angegeben:

- `<length-percentage>`
  - : Eine Länge, die die Position der linken Kante des Bildes relativ zur linken Padding-Kante der Box angibt. Prozentwerte werden anhand der horizontalen Dimension des Padding-Bereichs der Box berechnet. Das bedeutet, dass ein Wert von `0%` die linke Kante des Bildes an der linken Padding-Kante der Box ausrichtet und ein Wert von `100%` die rechte Kante des Bildes an der rechten Padding-Kante der Box ausrichtet.
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

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask-position", "-webkit-mask-position")}}
- {{cssxref("-webkit-mask-position-y")}}
- {{cssxref("mask-origin", "-webkit-mask-origin")}}
