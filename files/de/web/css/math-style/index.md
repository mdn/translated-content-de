---
title: math-style
slug: Web/CSS/math-style
l10n:
  sourceCommit: 18a07f5d474f44cdc6b343a5439e8792c6ce8d62
---

{{CSSRef}}

Die Eigenschaft `math-style` gibt an, ob MathML-Gleichungen mit normaler oder kompakter Höhe dargestellt werden sollen.

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

- `normal`
  - : Der Anfangswert, zeigt normale Darstellung an.
- `compact`
  - : Das mathematische Layout auf Nachkommen versucht, die logische Höhe zu minimieren.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Ändern des Stils einer Formel zu kompakt

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
