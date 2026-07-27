---
title: "`math-style` CSS property"
short-title: math-style
slug: Web/CSS/Reference/Properties/math-style
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

Die Eigenschaft `math-style` gibt an, ob MathML-Gleichungen mit normaler oder kompakter Höhe gerendert werden sollen.

## Syntax

```css
/* Keyword values */
math-style: normal;
math-style: compact;

/* Global values */
math-style: inherit;
math-style: initial;
math-style: revert;
math-style: revert-layer;
math-style: unset;
```

### Werte

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte spezifiziert:

- `normal`
  - : Der Anfangswert, kennzeichnet normales Rendering.
- `compact`
  - : Das Mathe-Layout bei Nachfahren versucht, die logische Höhe zu minimieren.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Die Darstellung einer Formel auf kompakt ändern

#### CSS

```css
math {
  math-style: normal;
}
.compact {
  math-style: compact;
}
```

#### HTML

```html
<p>
  Normal height
  <math>
    <mrow>
      <munderover>
        <mo>∑</mo>
        <mrow>
          <mi>n</mi>
          <mo>=</mo>
          <mn>1</mn>
        </mrow>
        <mrow>
          <mo>+</mo>
          <mn>∞</mn>
        </mrow>
      </munderover>
    </mrow>
  </math>
  and compact height
  <math class="compact">
    <mrow>
      <munderover>
        <mo>∑</mo>
        <mrow>
          <mi>n</mi>
          <mo>=</mo>
          <mn>1</mn>
        </mrow>
        <mrow>
          <mo>+</mo>
          <mn>∞</mn>
        </mrow>
      </munderover>
    </mrow>
  </math>
  equations.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("math-depth")}}
- {{cssxref("font-size")}}
