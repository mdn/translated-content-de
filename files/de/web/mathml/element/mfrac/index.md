---
title: <mfrac>
slug: Web/MathML/Element/mfrac
l10n:
  sourceCommit: 34c43aca36f776c824e698dfd07e3ece34cc6f00
---

{{MathMLRef}}

Das **`<mfrac>`** [MathML](/de/docs/Web/MathML)-Element wird verwendet, um Brüche darzustellen. Es kann auch dazu verwendet werden, bruchähnliche Objekte wie [binomiale Koeffizienten](https://en.wikipedia.org/wiki/Binomial_coefficient) und [Legendre-Symbole](https://en.wikipedia.org/wiki/Legendre_symbol) zu markieren.

## Syntax

```html
<mfrac>numerator denominator</mfrac>
```

## Attribute

Dieses Element enthält die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie folgende Attribute:

- `denomalign` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Die Ausrichtung des Nenners unter dem Bruchstrich. Mögliche Werte sind: `left`, `center` (Standard) und `right`.
- `linethickness`
  - : Eine {{cssxref("length-percentage")}}, die die Dicke der horizontalen Bruchlinie angibt.
- `numalign` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Die Ausrichtung des Zählers über dem Bruchstrich. Mögliche Werte sind: `left`, `center` (Standard) und `right`.

> [!NOTE]
> Für das Attribut `linethickness` akzeptieren einige Browser möglicherweise auch die veralteten Werte `medium`, `thin` und `thick` (deren genaue Interpretation den Implementierenden überlassen bleibt) oder [veraltete MathML-Längen](/de/docs/Web/MathML/Values#legacy_mathml_lengths).

## Beispiele

### Einfacher Bruch

Der folgende MathML-Code sollte als Bruch mit dem Zähler "a + 2" und dem Nenner "3 − b" gerendert werden:

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

### Bruch ohne Strich

Der folgende MathML-Code sollte als [binomialer Koeffizient](https://en.wikipedia.org/wiki/Binomial_coefficient) gerendert werden:

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
