---
title: math-shift
slug: Web/CSS/Reference/Properties/math-shift
l10n:
  sourceCommit: 6de2b9ea9385f46a701534b4c20eddbb7b5d753c
---

Die Eigenschaft `math-shift` gibt an, ob Hochzahlen in MathML-Formeln durch einen normalen oder kompakten Abstand angehoben werden sollen.

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
  - : Der Anfangswert, der normales Rendering angibt. Hochzahlen in MathML-Formeln verwenden den [superscriptShiftUp](https://w3c.github.io/mathml-core/#dfn-superscriptshiftup)-Parameter aus der OpenType MATH-Tabelle.
- `compact`
  - : Gibt kompaktes Rendering an. Hochzahlen in MathML-Formeln verwenden den [superscriptShiftUpCramped](https://w3c.github.io/mathml-core/#dfn-superscriptshiftupcramped)-Parameter aus der OpenType MATH-Tabelle, der in der Regel kleiner ist.

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

Das folgende MathML zeigt zwei Versionen von "x zum Quadrat" unter Verwendung einer Schriftart mit einer OpenType MATH-Tabelle. Browser, die die `math-shift`-Eigenschaft implementieren, sollten die Hochzahlen mit leicht unterschiedlichen Abständen anheben.

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
