---
title: math-shift
slug: Web/CSS/Reference/Properties/math-shift
l10n:
  sourceCommit: 6e23feb9bf66f4734947d7cea5e4fe59dac028ce
---

Die `math-shift`-Eigenschaft gibt an, ob hochgestellte Zeichen innerhalb von MathML-Formeln mit einem normalen oder kompakten Versatz angehoben werden sollen.

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
  - : Der Anfangswert, der normales Rendering angibt. Hochgestellte Zeichen in MathML-Formeln verwenden den [superscriptShiftUp](https://w3c.github.io/mathml-core/#dfn-superscriptshiftup)-Parameter aus der OpenType MATH-Tabelle.
- `compact`
  - : Gibt ein kompaktes Rendering an. Hochgestellte Zeichen in MathML-Formeln verwenden den [superscriptShiftUpCramped](https://w3c.github.io/mathml-core/#dfn-superscriptshiftupcramped)-Parameter aus der OpenType MATH-Tabelle, der in der Regel kleiner ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Normaler und kompakter Versatz

Das folgende MathML zeigt zwei Versionen von „x hoch 2“ unter Verwendung einer Schriftart mit einer OpenType MATH-Tabelle. Die `math-shift`-Eigenschaft wird verwendet, um die hochgestellten Zeichen mit dem `normal`- und `compact`-Versatz anzuheben.

#### CSS

```css
math {
  font-size: 64pt;
  math-shift: normal;
}

.compact-shift {
  math-shift: compact;
}
```

#### MathML

```html
<math>
  <msup>
    <mi>x</mi>
    <mn>2</mn>
  </msup>
  <msup class="compact-shift">
    <mi>x</mi>
    <mn>2</mn>
  </msup>
</math>
```

#### Ergebnisse

Beachten Sie, dass die zweite „2“ einen kompakteren (niedrigeren) Versatz hat.

{{EmbedLiveSample("math-shift-example", "100%", "150px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("math-depth")}}
- {{cssxref("font-size")}}
