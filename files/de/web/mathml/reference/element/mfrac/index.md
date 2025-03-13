---
title: <mfrac>
slug: Web/MathML/Reference/Element/mfrac
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

Das **`<mfrac>`**-Element in [MathML](/de/docs/Web/MathML) wird verwendet, um Brüche darzustellen. Es kann auch verwendet werden, um bruchähnliche Objekte wie [binomiale Koeffizienten](https://en.wikipedia.org/wiki/Binomial_coefficient) und [Legendre-Symbole](https://en.wikipedia.org/wiki/Legendre_symbol) zu formatieren.

## Syntax

```html
<mfrac>numerator denominator</mfrac>
```

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes) sowie die folgenden Attribute:

- `denomalign` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Die Ausrichtung des Nenners unter dem Bruch. Mögliche Werte sind: `left`, `center` (Standard) und `right`.
- `linethickness`
  - : Eine {{cssxref("length-percentage")}}, die die Dicke der horizontalen Bruchlinie angibt.
- `numalign` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Die Ausrichtung des Zählers über dem Bruch. Mögliche Werte sind: `left`, `center` (Standard) und `right`.

> [!NOTE]
> Für das `linethickness`-Attribut können einige Browser auch die veralteten Werte `medium`, `thin` und `thick` akzeptieren (deren genaue Interpretation den Implementierern überlassen wird) oder [veraltete MathML-Längen](/de/docs/Web/MathML/Reference/Values#legacy_mathml_lengths) verwenden.

## Beispiele

### Einfacher Bruch

Der folgende MathML-Code sollte als ein Bruch mit dem Zähler "a + 2" und dem Nenner "3 − b" dargestellt werden:

```html
<math display="block">
  <mfrac>
    <mrow>
      <mi>a</mi>
      <mo>+</mo>
      <mn>2</mn>
    </mrow>
    <mrow>
      <mn>3</mn>
      <mo>−</mo>
      <mi>b</mi>
    </mrow>
  </mfrac>
</math>
```

{{ EmbedLiveSample('simple_fraction', 700, 200, "", "") }}

### Bruch ohne Linie

Der folgende MathML-Code sollte als ein [binomialer Koeffizient](https://en.wikipedia.org/wiki/Binomial_coefficient) dargestellt werden:

```html
<math display="block">
  <mrow>
    <mo>(</mo>
    <mfrac linethickness="0">
      <mi>n</mi>
      <mi>k</mi>
    </mfrac>
    <mo>)</mo>
  </mrow>
</math>
```

{{ EmbedLiveSample('Fraction_without_bar', 700, 200, "", "") }}

## Technische Zusammenfassung

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles">Implizite ARIA-Rolle</a>
    </th>
    <td>
      Keine
    </td>
  </tr>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
