---
title: "-webkit-mask-position-x"
slug: Web/CSS/-webkit-mask-position-x
l10n:
  sourceCommit: 5bbe2b2db2e92981cb625822d4ea62d6eea3c5f8
---

{{CSSRef}}{{Non-standard_header}}

Die CSS-Eigenschaft `-webkit-mask-position-x` legt die anfängliche horizontale Position eines Maskenbildes fest.

## Syntax

```css
/* Schlüsselwortwerte */
-webkit-mask-position-x: left;
-webkit-mask-position-x: center;
-webkit-mask-position-x: right;

/* <Prozent> Werte */
-webkit-mask-position-x: 100%;
-webkit-mask-position-x: -50%;

/* <Längen> Werte */
-webkit-mask-position-x: 50px;
-webkit-mask-position-x: -1cm;

/* Mehrere Werte */
-webkit-mask-position-x:
  50px,
  25%,
  -3em;

/* Globale Werte */
-webkit-mask-position-x: inherit;
-webkit-mask-position-x: initial;
-webkit-mask-position-x: revert;
-webkit-mask-position-x: revert-layer;
-webkit-mask-position-x: unset;
```

### Werte

- `<length-percentage>`
  - : Eine Länge, die die Position der linken Kante des Bildes relativ zur linken Innenkante des Blocks angibt. Prozentsätze werden basierend auf der horizontalen Dimension des Innenbereichs des Blocks berechnet. Das bedeutet, ein Wert von `0%` bedeutet, dass die linke Kante des Bildes mit der linken Innenkante des Blocks ausgerichtet ist, und ein Wert von `100%` bedeutet, dass die rechte Kante des Bildes mit der rechten Innenkante des Blocks ausgerichtet ist.
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
