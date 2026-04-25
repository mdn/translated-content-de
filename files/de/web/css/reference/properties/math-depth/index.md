---
title: "`math-depth` CSS property"
short-title: math-depth
slug: Web/CSS/Reference/Properties/math-depth
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`math-depth`**-Eigenschaft beschreibt einen Begriff der _Tiefe_ für jedes Element einer mathematischen Formel in Bezug auf den obersten Container dieser Formel. Dies wird verwendet, um den berechneten Wert der [Schriftgröße](/de/docs/Web/CSS/Reference/Properties/font-size) von Elementen zu skalieren, wenn `font-size: math` angewendet wird.

> [!NOTE]
> `font-size: math` ist die Standardeinstellung für `<math>`-Elemente im MathML Core [User Agent-Stylesheet](https://w3c.github.io/mathml-core/#user-agent-stylesheet), daher ist es nicht notwendig, es explizit anzugeben.

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
  - : Wird auf die geerbte `math-depth` plus der angegebenen Ganzzahl gesetzt.
- {{cssxref("&lt;integer&gt;")}}
  - : Wird auf die angegebene Ganzzahl gesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Festlegung einer mathematischen Tiefe

Das folgende Beispiel zeigt die Auswirkung der Änderung der Eigenschaft `math-depth` auf die Schriftgröße von Unterformeln. Die Zahlen in jeder Unterformel geben die `math-depth` und den angewandten Skalierungsfaktor an.

Das erste `<mtext>`-Element wird als Referenz für andere Unterformeln verwendet und hat keine spezifischen Stile angewendet.
Die zweite und dritte Unterformeln haben `math-depth` auf `auto-add` gesetzt und zeigen die Skalierungseffekte in Abhängigkeit vom `math-style`.

Die letzten beiden Unterformeln zeigen die Auswirkung der Einstellung von `math-depth` auf einen bestimmten Wert.

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
