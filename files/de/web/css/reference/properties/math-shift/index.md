---
title: "`math-shift` CSS property"
short-title: math-shift
slug: Web/CSS/Reference/Properties/math-shift
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die `math-shift`-Eigenschaft gibt an, ob Hochzahlen in MathML-Formeln durch eine normale oder kompakte Verschiebung angehoben werden sollen.

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
  - : Gibt ein kompaktes Rendering an. Hochzahlen in MathML-Formeln verwenden den [superscriptShiftUpCramped](https://w3c.github.io/mathml-core/#dfn-superscriptshiftupcramped)-Parameter aus der OpenType MATH-Tabelle, der im Allgemeinen kleiner ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Normale und kompakte Verschiebung

Das folgende MathML zeigt zwei Versionen von "x zum Quadrat" unter Verwendung einer Schriftart mit einer OpenType MATH-Tabelle.
Die `math-shift`-Eigenschaft wird verwendet, um die Hochzahlen mit der `normal` und `compact` Verschiebung anzuheben.

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

Beachten Sie, dass die zweite "2" eine kompaktere (niedrigere) Verschiebung aufweist.

{{EmbedLiveSample("math-shift-example", "100%", "150px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("math-depth")}}
- {{cssxref("font-size")}}
