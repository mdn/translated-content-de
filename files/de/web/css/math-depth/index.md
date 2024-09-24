---
title: math-depth
slug: Web/CSS/math-depth
l10n:
  sourceCommit: 727078e752e7ed645bb3e739a7615ba3c0f09327
---

{{CSSRef}}

Die **`math-depth`**-Eigenschaft beschreibt einen Begriff der _Tiefe_ für jedes Element einer mathematischen Formel in Bezug auf den obersten Container dieser Formel. Diese wird verwendet, um den berechneten Wert der [Schriftgröße](/de/docs/Web/CSS/font-size) von Elementen zu skalieren, wenn `font-size: math` angewendet wird.

> **Note:** `font-size: math` ist der Standard für `<math>`-Elemente im MathML Core [User-Agent-Stylesheet](https://w3c.github.io/mathml-core/#user-agent-stylesheet), daher ist es nicht notwendig, es explizit anzugeben.

## Syntax

```css
/* Schlüsselwortwerte */
math-depth: auto-add;

/* Relative Werte */
math-depth: add(2);
math-depth: add(-2);

/* Absoluter Wert */
math-depth: 4;

/* Globale Werte */
math-depth: inherit;
math-depth: initial;
math-depth: revert;
math-depth: revert-layer;
math-depth: unset;
```

### Werte

- `auto-add`
  - : Auf die geerbte `math-depth` plus 1 gesetzt, wenn geerbter [math-style](/de/docs/Web/CSS/math-style) `compact` ist.
- `add({{cssxref("&lt;integer&gt;")}})`
  - : Auf die geerbte `math-depth` plus den angegebenen Integer gesetzt.
- {{cssxref("&lt;integer&gt;")}}
  - : Auf den angegebenen Integer gesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Festlegen einer mathematischen Tiefe

Das folgende Beispiel zeigt die Auswirkung der Änderung der `math-depth`-Eigenschaft auf die Schriftgröße von Unterformeln.
Die Zahlen in jeder Unterformel zeigen die `math-depth` und den angewendeten Skalierungsfaktor an.

Das erste `<mtext>`-Element wird als Referenz für andere Unterformeln verwendet und hat keine spezifischen Stile angewendet.
Die zweite und dritte Unterformel haben `math-depth` auf `auto-add` gesetzt und zeigen die Auswirkungen der Skalierung abhängig vom `math-style`.

Die letzten beiden Unterformeln zeigen die Auswirkung, wenn `math-depth` auf einen bestimmten Wert eingestellt wird.

#### HTML

```html
<p style="font-size: 3rem; margin: 1rem 0">
  <math>
    <mtext>0</mtext>

    <!-- auto-add hat keine Wirkung, wenn math-style normal ist -->
    <mrow style="math-style: normal">
      <mrow style="math-depth: auto-add">
        <mtext>0</mtext>
      </mrow>
    </mrow>

    <!-- der geerbte math-style ist compact, daher wird math-depth auf 1 gesetzt -->
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

#### Ergebnis

{{embedlivesample('Specifying_a_math_depth', 600, 100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-size")}}
- {{cssxref("math-style")}}
