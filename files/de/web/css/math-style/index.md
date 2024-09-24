---
title: math-style
slug: Web/CSS/math-style
l10n:
  sourceCommit: 18a07f5d474f44cdc6b343a5439e8792c6ce8d62
---

{{CSSRef}}

Die Eigenschaft `math-style` gibt an, ob MathML-Gleichungen mit normaler oder kompakter Höhe gerendert werden sollen.

## Syntax

```css
/* Schlüsselwortwerte */
math-style: normal;
math-style: compact;

/* Globale Werte */
math-style: inherit;
math-style: initial;
math-style: revert;
math-style: revert-layer;
math-style: unset;
```

### Werte

- `normal`
  - : Der ursprüngliche Wert, steht für normales Rendering.
- `compact`
  - : Das mathematische Layout von Nachfahren versucht, die logische Höhe zu minimieren.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Ändern des Stils einer Formel auf kompakt

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
  Normale Höhe
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
  und kompakte Höhe
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
  Gleichungen.
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
