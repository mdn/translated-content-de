---
title: <msubsup>
slug: Web/MathML/Element/msubsup
l10n:
  sourceCommit: 34c43aca36f776c824e698dfd07e3ece34cc6f00
---

{{MathMLRef}}

Das **`<msubsup>`** [MathML](/de/docs/Web/MathML)-Element wird verwendet, um gleichzeitig einen Subscript und einen Superscript an einen Ausdruck anzuhängen.

Es verwendet die folgende Syntax: `<msubsup> base subscript superscript </msubsup>`.

## Attribute

Die Attribute dieses Elements beinhalten die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie die folgenden veralteten Attribute:

- `subscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Ein {{cssxref("length-percentage")}}, das die Mindestmenge angibt, um die Grundlinie des Subscripts nach unten zu verschieben.
- `superscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Ein {{cssxref("length-percentage")}}, das die Mindestmenge angibt, um die Grundlinie des Superscripts nach oben zu verschieben.

> [!NOTE]
> Für die Attribute `subscriptshift` und `superscriptshift` können einige Browser auch [Legacy-MathML-Längen](/de/docs/Web/MathML/Values#legacy_mathml_lengths) akzeptieren.

## Beispiele

```html
<math display="block">
  <msubsup>
    <mo>&#x222B;<!--Integral --></mo>
    <mn>0</mn>
    <mn>1</mn>
  </msubsup>
</math>
```

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ MathMLElement("msub") }} (Subscript)
- {{ MathMLElement("msup") }} (Superscript)
- {{ MathMLElement("mmultiscripts") }} (Präskripte und Tensorindizes)
