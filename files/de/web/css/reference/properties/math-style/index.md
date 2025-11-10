---
title: math-style
slug: Web/CSS/Reference/Properties/math-style
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die `math-style`-Eigenschaft gibt an, ob MathML-Gleichungen mit normaler oder kompakter Höhe gerendert werden sollen.

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
  - : Der Anfangswert, zeigt normales Rendering an.
- `compact`
  - : Das mathematische Layout bei Nachfahren versucht, die logische Höhe zu minimieren.

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
