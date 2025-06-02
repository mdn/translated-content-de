---
title: math-depth
slug: Web/CSS/math-depth
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

{{CSSRef}}

Die **`math-depth`**-Eigenschaft beschreibt einen Begriff der _Tiefe_ für jedes Element einer mathematischen Formel in Bezug auf den Top-Level-Container dieser Formel. Diese Eigenschaft wird verwendet, um den berechneten Wert der [font-size](/de/docs/Web/CSS/font-size) von Elementen zu skalieren, wenn `font-size: math` angewendet wird.

> **Note:** `font-size: math` ist der Standard für `<math>`-Elemente im MathML Core [User-Agent-Stilvorlage](https://w3c.github.io/mathml-core/#user-agent-stylesheet), daher ist es nicht notwendig, sie explizit anzugeben.

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
  - : Wird auf die geerbte `math-depth` plus 1 gesetzt, wenn das geerbte [math-style](/de/docs/Web/CSS/math-style) `compact` ist.
- `add({{cssxref("&lt;integer&gt;")}})`
  - : Wird auf die geerbte `math-depth` plus die angegebene Ganzzahl gesetzt.
- {{cssxref("&lt;integer&gt;")}}
  - : Wird auf die angegebene Ganzzahl gesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Eine mathematische Tiefe spezifizieren

Das folgende Beispiel zeigt die Auswirkungen der Änderung der `math-depth`-Eigenschaft auf die Schriftgröße von Unterformeln. Die Zahlen in jeder Unterformel geben die `math-depth` und den angewendeten Skalierungsfaktor an.

Das erste `<mtext>`-Element wird als Referenz für andere Unterformeln verwendet und hat keine spezifisch angewendeten Stile. Die zweite und dritte Unterformel haben `math-depth` auf `auto-add` gesetzt und zeigen die Auswirkungen der Skalierung in Abhängigkeit vom `math-style`.

Die letzten beiden Unterformeln zeigen die Auswirkungen der Einstellung von `math-depth` auf einen spezifischen Wert.

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
