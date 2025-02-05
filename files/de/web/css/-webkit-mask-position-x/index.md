---
title: "-webkit-mask-position-x"
slug: Web/CSS/-webkit-mask-position-x
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}{{Non-standard_header}}

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
  - : Eine Länge, die die Position der linken Kante des Bildes relativ zur linken Polsterungskante der Box angibt. Prozentwerte werden relativ zur horizontalen Dimension des Polsterbereichs der Box berechnet. Das bedeutet, ein Wert von `0%` bedeutet, dass die linke Kante des Bildes mit der linken Polsterungskante der Box ausgerichtet ist, und ein Wert von `100%` bedeutet, dass die rechte Kante des Bildes mit der rechten Polsterungskante der Box ausgerichtet ist.
- `left`
  - : Entspricht `0%`.
- `center`
  - : Entspricht `50%`.
- `right`
  - : Entspricht `100%`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

```plain
-webkit-mask-position-x =
  [ <length-percentage> | left | center | right ]#
```

## Beispiele

### Horizontale Positionierung eines Maskenbildes

```css
.exampleOne {
  -webkit-mask-image: url(mask.png);
  -webkit-mask-position-x: right;
}

.exampleTwo {
  -webkit-mask-image: url(mask.png);
  -webkit-mask-position-x: 25%;
}
```

## Spezifikationen

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

{{cssxref("mask-position", "-webkit-mask-position")}}, {{cssxref("-webkit-mask-position-y")}}, {{cssxref("mask-origin", "-webkit-mask-origin")}}
