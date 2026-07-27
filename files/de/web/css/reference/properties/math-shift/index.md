---
title: "`math-shift` CSS property"
short-title: math-shift
slug: Web/CSS/Reference/Properties/math-shift
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

Die `math-shift`-Eigenschaft gibt an, ob die Hochstellungen in MathML-Formeln mit einer normalen oder kompakten Verschiebung gehoben werden sollen.

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

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `normal`
  - : Der Anfangswert, der normales Rendering anzeigt. Hochstellungen in MathML-Formeln verwenden den [superscriptShiftUp](https://w3c.github.io/mathml-core/#dfn-superscriptshiftup)-Parameter aus der OpenType MATH-Tabelle.
- `compact`
  - : Zeigt kompaktes Rendering an. Hochstellungen in MathML-Formeln verwenden den [superscriptShiftUpCramped](https://w3c.github.io/mathml-core/#dfn-superscriptshiftupcramped)-Parameter aus der OpenType MATH-Tabelle, welcher im Allgemeinen kleiner ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Normale und kompakte Verschiebung

Das folgende MathML zeigt zwei Versionen von "x hoch zwei" mit einer Schriftart, die eine OpenType MATH-Tabelle aufweist.
Die `math-shift`-Eigenschaft wird verwendet, um die Hochstellungen mit der `normal`- und `compact`-Verschiebung zu heben.

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
