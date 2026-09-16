---
title: "`math-depth` CSS property"
short-title: math-depth
slug: Web/CSS/Reference/Properties/math-depth
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

Die Eigenschaft **`math-depth`** beschreibt für jedes Element einer mathematischen Formel ein Konzept der _Tiefe_ in Bezug auf den Container der obersten Ebene dieser Formel. Dies wird verwendet, um den berechneten Wert von [font-size](/de/docs/Web/CSS/Reference/Properties/font-size) von Elementen zu skalieren, wenn `font-size: math` angewendet wird.

> [!NOTE]
> `font-size: math` ist die Standardeinstellung für `<math>`-Elemente im MathML-Core-[User-Agent-Stylesheet](https://w3c.github.io/mathml-core/#user-agent-stylesheet), daher muss es nicht explizit angegeben werden.

## Syntax

```css
/* Keyword value */
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
  - : Wird auf den geerbten Wert von `math-depth` plus 1 gesetzt, wenn das geerbte [math-style](/de/docs/Web/CSS/Reference/Properties/math-style) `compact` ist.
- `add({{cssxref("&lt;integer&gt;")}})`
  - : Wird auf den geerbten Wert von `math-depth` plus die angegebene Ganzzahl gesetzt.
- {{cssxref("&lt;integer&gt;")}}
  - : Wird auf die angegebene Ganzzahl gesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Eine mathematische Tiefe angeben

Das folgende Beispiel zeigt die Auswirkung einer Änderung der Eigenschaft `math-depth` auf die Schriftgröße von Teilformeln.
Die Zahlen in jeder Teilformel geben die angewendeten Werte für `math-depth` und den Skalierungsfaktor an.

Das erste `<mtext>`-Element wird als Referenz für andere Teilformeln verwendet und hat keine spezifischen angewendeten Stile.
Für die zweite und dritte Teilformel ist `math-depth` auf `auto-add` gesetzt; sie zeigen die Auswirkung der Skalierung in Abhängigkeit von `math-style`.

Die letzten beiden Teilformeln zeigen die Auswirkung, wenn `math-depth` auf einen bestimmten Wert gesetzt wird.

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
