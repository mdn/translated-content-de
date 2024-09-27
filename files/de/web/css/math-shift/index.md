---
title: math-shift
slug: Web/CSS/math-shift
l10n:
  sourceCommit: 7a9f9baa25d9a7313bd6c62ef5ef585b28459c58
---

{{CSSRef}}{{SeeCompatTable}}

Die Eigenschaft `math-shift` gibt an, ob Hochstellen in MathML-Formeln durch eine normale oder kompakte Verschiebung angehoben werden sollen.

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
  - : Der Anfangswert, der normales Rendering anzeigt. Hochstellen in MathML-Formeln verwenden den [superscriptShiftUp](https://w3c.github.io/mathml-core/#dfn-superscriptshiftup) Parameter aus der OpenType MATH-Tabelle.
- `compact`
  - : Zeigt kompaktes Rendering an. Hochstellen in MathML-Formeln verwenden den [superscriptShiftUpCramped](https://w3c.github.io/mathml-core/#dfn-superscriptshiftupcramped) Parameter aus der OpenType MATH-Tabelle, der in der Regel kleiner ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### CSS

```css
math {
  math-shift: compact;
}
```

### MathML

Das folgende MathML zeigt zwei Versionen von "x im Quadrat" unter Verwendung einer Schriftart mit einer OpenType MATH-Tabelle. Browser, die die Eigenschaft `math-shift` implementieren, sollten die Hochstellen mit leicht unterschiedlichen Verschiebungen anheben.

```html
<math style="font-size: 64pt;">
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
