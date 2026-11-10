---
title: "`math-shift` CSS property"
short-title: math-shift
slug: Web/CSS/Reference/Properties/math-shift
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Die Eigenschaft `math-shift` legt fest, ob Hochstellungen innerhalb von MathML-Formeln um einen normalen oder einen kompakteren Abstand angehoben werden.

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

Für diese Eigenschaft kann einer der folgenden Schlüsselwortwerte angegeben werden:

- `normal`
  - : Der Ausgangswert. Er gibt die normale Darstellung an. Hochstellungen in MathML-Formeln verwenden den Parameter [superscriptShiftUp](https://w3c.github.io/mathml-core/#dfn-superscriptshiftup) aus der OpenType-MATH-Tabelle.
- `compact`
  - : Gibt eine kompakte Darstellung an. Hochstellungen in MathML-Formeln verwenden den Parameter [superscriptShiftUpCramped](https://w3c.github.io/mathml-core/#dfn-superscriptshiftupcramped) aus der OpenType-MATH-Tabelle, der in der Regel kleiner ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Normale und kompakte Anhebung

Das folgende MathML zeigt zwei Versionen von „x zum Quadrat“ mit einer Schriftart, die über eine OpenType-MATH-Tabelle verfügt.
Die Eigenschaft `math-shift` wird verwendet, um die Hochstellungen mit der Anhebung `normal` beziehungsweise `compact` darzustellen.

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

Beachten Sie, dass die zweite „2“ weniger stark angehoben ist.

{{EmbedLiveSample("normal_and_compact_shift", "100%", "150px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("math-depth")}}
- {{cssxref("font-size")}}
