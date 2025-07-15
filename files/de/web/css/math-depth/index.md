---
title: math-depth
slug: Web/CSS/math-depth
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`math-depth`**-Eigenschaft beschreibt ein Konzept der _Tiefe_ für jedes Element einer mathematischen Formel in Bezug auf das oberste Container-Level dieser Formel. Diese Eigenschaft wird verwendet, um den berechneten Wert der [font-size](/de/docs/Web/CSS/font-size) von Elementen zu skalieren, wenn `font-size: math` angewendet wird.

> [!NOTE]
> `font-size: math` ist die Standardeinstellung für `<math>`-Elemente im MathML Core [User Agent stylesheet](https://w3c.github.io/mathml-core/#user-agent-stylesheet), sodass es nicht notwendig ist, diese explizit anzugeben.

## Syntax

```css
/* Keyword values */
math-depth: auto-add;

/* Relative values */
math-depth: add(2);
math-depth: add(-2);

/* Absolute value */
math-depth: 4;

/* Global values */
math-depth: inherit;
math-depth: initial;
math-depth: revert;
math-depth: revert-layer;
math-depth: unset;
```

### Werte

- `auto-add`
  - : Setzt auf die geerbte `math-depth` plus 1, wenn geerbter [math-style](/de/docs/Web/CSS/math-style) `compact` ist.
- `add({{cssxref("&lt;integer&gt;")}})`
  - : Setzt auf die geerbte `math-depth` plus den angegebenen Integer-Wert.
- {{cssxref("&lt;integer&gt;")}}
  - : Setzt auf den angegebenen Integer-Wert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Festlegen einer math depth

Das folgende Beispiel zeigt die Wirkung der Änderung der Eigenschaft `math-depth` auf die Schriftgröße von Unterformeln.
Die Zahlen in jeder Unterformel geben die `math-depth` und den angewendeten Skalierungsfaktor an.

Das erste `<mtext>`-Element dient als Referenz für andere Unterformeln und hat keine spezifischen Stile angewendet.
Die zweite und dritte Unterformel haben `math-depth` auf `auto-add` gesetzt und zeigen die Auswirkungen der Skalierung in Abhängigkeit vom `math-style`.

Die letzten beiden Unterformeln zeigen die Wirkung, wenn `math-depth` auf einen bestimmten Wert gesetzt wird.

#### HTML

```html
<p>
  <math>
    <mtext>0</mtext>

    <!-- auto-add value has no effect when math-style is normal -->
    <mrow style="math-style: normal">
      <mrow style="math-depth: auto-add">
        <mtext>0</mtext>
      </mrow>
    </mrow>

    <!-- the inherited math-style is compact, so math-depth is set to 1 -->
    <mrow style="math-depth: auto-add">
      <mtext>1</mtext>
    </mrow>

    <mrow style="math-depth: add(2)">
      <mtext>2</mtext>
      <mrow style="math-depth: add(-1)">
        <mtext>1</mtext>
      </mrow>
      <mrow style="math-depth: 0">
        <mtext>0</mtext>
      </mrow>
    </mrow>
  </math>
</p>
```

```css hidden
p {
  font-size: 3rem;
  margin: 1rem 0;
}
```

#### Ergebnis

{{embedlivesample('Specifying_a_math_depth', 600, 100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-size")}}
- {{cssxref("math-style")}}
