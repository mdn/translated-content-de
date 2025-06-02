---
title: math-shift
slug: Web/CSS/math-shift
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

{{CSSRef}}{{SeeCompatTable}}

Die Eigenschaft `math-shift` gibt an, ob hochgestellte Zeichen in MathML-Formeln durch eine normale oder kompakte Verschiebung angehoben werden sollen.

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
  - : Der Anfangswert, zeigt normales Rendering. Hochgestellte Zeichen in MathML-Formeln verwenden den [superscriptShiftUp](https://w3c.github.io/mathml-core/#dfn-superscriptshiftup)-Parameter aus der OpenType MATH-Tabelle.
- `compact`
  - : Zeigt kompaktes Rendering an. Hochgestellte Zeichen in MathML-Formeln verwenden den [superscriptShiftUpCramped](https://w3c.github.io/mathml-core/#dfn-superscriptshiftupcramped)-Parameter aus der OpenType MATH-Tabelle, der in der Regel kleiner ist.

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
```

### MathML

Das folgende MathML zeigt zwei Versionen von "x quadratisch" unter Verwendung einer Schriftart mit einer OpenType MATH-Tabelle. Browser, die die Eigenschaft `math-shift` implementieren, sollten die hochgestellten Zeichen mit leicht unterschiedlichen Verschiebungen anheben.

```html
<math>
  <msup style="math-shift: normal">
    <mi>x</mi>
    <mn>2</mn>
  </msup>
  <msup style="math-shift: compact">
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
