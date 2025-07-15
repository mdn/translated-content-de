---
title: math-shift
slug: Web/CSS/math-shift
l10n:
  sourceCommit: 72a2f0fa7f25ba32ab8e07447a8d4bbc2f936b85
---

{{SeeCompatTable}}

Die Eigenschaft `math-shift` gibt an, ob Hochzahlen in MathML-Formeln durch einen normalen oder kompakten Verschiebung versetzt werden sollen.

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
  - : Der Anfangswert, der normales Rendering angibt. Hochzahlen in MathML-Formeln verwenden den [superscriptShiftUp](https://w3c.github.io/mathml-core/#dfn-superscriptshiftup)-Parameter aus der OpenType MATH Tabelle.
- `compact`
  - : Gibt kompaktes Rendering an. Hochzahlen in MathML-Formeln verwenden den [superscriptShiftUpCramped](https://w3c.github.io/mathml-core/#dfn-superscriptshiftupcramped)-Parameter aus der OpenType MATH Tabelle, der im Allgemeinen kleiner ist.

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

Das folgende MathML zeigt zwei Versionen von "x zum Quadrat", die eine Schriftart mit einer OpenType MATH-Tabelle verwenden. Ein Browser, der die Eigenschaft `math-shift` implementiert, sollte die Hochzahlen mit leicht unterschiedlichen Verschiebungen anheben.

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
