---
title: math-shift
slug: Web/CSS/Reference/Properties/math-shift
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{SeeCompatTable}}

Die `math-shift`-Eigenschaft gibt an, ob Superskripte innerhalb von MathML-Formeln mit einer normalen oder kompakten Verschiebung angehoben werden sollen.

## Syntax

```css
/* Keyword values */
math-shift: normal;
math-shift: compact;

/* Global values */
math-shift: inherit;
math-shift: initial;
math-shift: revert;
math-shift: revert-layer;
math-shift: unset;
```

### Werte

- `normal`
  - : Der Anfangswert, der eine normale Darstellung angibt. Superskripte in MathML-Formeln verwenden den [superscriptShiftUp](https://w3c.github.io/mathml-core/#dfn-superscriptshiftup)-Parameter aus der OpenType MATH-Tabelle.
- `compact`
  - : Gibt eine kompakte Darstellung an. Superskripte in MathML-Formeln verwenden den [superscriptShiftUpCramped](https://w3c.github.io/mathml-core/#dfn-superscriptshiftupcramped)-Parameter aus der OpenType MATH-Tabelle, der im Allgemeinen kleiner ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### CSS

```css
math {
  math-shift: compact;
  font-size: 64pt;
}

.normal-shift {
  math-shift: normal;
}
.compact-shift {
  math-shift: compact;
}
```

### MathML

Das folgende MathML zeigt zwei Versionen von "x hoch zwei" unter Verwendung einer Schriftart mit einer OpenType MATH-Tabelle. Browser, die die `math-shift`-Eigenschaft implementieren, sollten die Superskripte mit leicht unterschiedlichen Verschiebungen anheben.

```html
<math>
  <msup class="normal-shift">
    <mi>x</mi>
    <mn>2</mn>
  </msup>
  <msup class="compact-shift">
    <mi>x</mi>
    <mn>2</mn>
  </msup>
</math>
```

{{EmbedLiveSample("math-shift-example", 700, 200, "", "")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("math-depth")}}
- {{cssxref("font-size")}}
