---
title: -webkit-mask-position-x
slug: Web/CSS/-webkit-mask-position-x
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}

Die CSS-Eigenschaft `-webkit-mask-position-x` setzt die initiale horizontale Position eines Maskenbildes.

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
  - : Eine Länge, die die Position der linken Kante des Bildes relativ zur linken Randeinlage des Box anzeigt. Prozentsätze werden im Verhältnis zur horizontalen Dimension des Box-Randbereichs berechnet. Das bedeutet, ein Wert von `0%` bedeutet, dass die linke Kante des Bildes an der linken Randeinlage des Box ausgerichtet ist, und ein Wert von `100%` bedeutet, dass die rechte Kante des Bildes an der rechten Randeinlage des Box ausgerichtet ist.
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
  -webkit-mask-image: url(mask.png);
  -webkit-mask-position-x: right;
}

.exampleTwo {
  -webkit-mask-image: url(mask.png);
  -webkit-mask-position-x: 25%;
}
```

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

{{cssxref("mask-position", "-webkit-mask-position")}}, {{cssxref("-webkit-mask-position-y")}}, {{cssxref("mask-origin", "-webkit-mask-origin")}}
