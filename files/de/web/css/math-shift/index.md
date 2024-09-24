---
title: math-shift
slug: Web/CSS/math-shift
l10n:
  sourceCommit: 7a9f9baa25d9a7313bd6c62ef5ef585b28459c58
---

{{CSSRef}}{{SeeCompatTable}}

Die `math-shift`-Eigenschaft gibt an, ob Hochzahlen in MathML-Formeln durch einen normalen oder kompakten Versatz angehoben werden sollten.

## Syntax

```css
/* Schlüsselwortwerte */
math-shift: normal;
math-shift: compact;

/* Globale Werte */
math-shift: inherit;
math-shift: initial;
math-shift: revert;
math-shift: revert-layer;
math-shift: unset;
```

### Werte

- `normal`
  - : Der anfängliche Wert, zeigt normales Rendering an. Hochzahlen in MathML-Formeln verwenden den Parameter [superscriptShiftUp](https://w3c.github.io/mathml-core/#dfn-superscriptshiftup) aus der OpenType MATH-Tabelle.
- `compact`
  - : Gibt kompaktes Rendering an. Hochzahlen in MathML-Formeln verwenden den Parameter [superscriptShiftUpCramped](https://w3c.github.io/mathml-core/#dfn-superscriptshiftupcramped) aus der OpenType MATH-Tabelle, der in der Regel kleiner ist.

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

Das folgende MathML zeigt zwei Versionen von "x hoch zwei" unter Verwendung einer Schriftart mit einer OpenType MATH-Tabelle. Browser, die die `math-shift`-Eigenschaft implementieren, sollten die Hochzahlen mit leicht unterschiedlichen Versatzhöhen anheben.

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
