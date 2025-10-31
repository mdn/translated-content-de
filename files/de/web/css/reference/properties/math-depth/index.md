---
title: math-depth
slug: Web/CSS/Reference/Properties/math-depth
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`math-depth`**-Eigenschaft beschreibt einen Begriff der _Tiefe_ für jedes Element einer mathematischen Formel in Bezug auf den obersten Container dieser Formel. Dies wird verwendet, um den berechneten Wert der [font-size](/de/docs/Web/CSS/Reference/Properties/font-size) von Elementen zu skalieren, wenn `font-size: math` angewendet wird.

> [!NOTE]
> `font-size: math` ist der Standard für `<math>`-Elemente im MathML Core [User Agent stylesheet](https://w3c.github.io/mathml-core/#user-agent-stylesheet), daher ist es nicht notwendig, es explizit anzugeben.

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
  - : Wird auf die geerbte `math-depth` plus 1 gesetzt, wenn der geerbte [math-style](/de/docs/Web/CSS/Reference/Properties/math-style) `compact` ist.
- `add({{cssxref("&lt;integer&gt;")}})`
  - : Wird auf die geerbte `math-depth` plus den angegebenen Integer gesetzt.
- {{cssxref("&lt;integer&gt;")}}
  - : Wird auf den angegebenen Integer gesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Festlegung einer mathematischen Tiefe

Das folgende Beispiel zeigt den Effekt der Änderung der `math-depth`-Eigenschaft auf die Schriftgröße von Teilformeln. Die Zahlen in jeder Teilformel geben die `math-depth` und den angewendeten Skalierungsfaktor an.

Das erste `<mtext>`-Element wird als Referenz für andere Teilformeln verwendet und hat keine spezifischen Stile angewendet. Die zweite und dritte Teilformel haben `math-depth` auf `auto-add` gesetzt und zeigen den Effekt der Skalierung in Abhängigkeit vom `math-style`.

Die letzten beiden Teilformeln zeigen den Effekt, wenn `math-depth` auf einen bestimmten Wert gesetzt wird.

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
