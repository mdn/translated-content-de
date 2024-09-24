---
title: <msup>
slug: Web/MathML/Element/msup
l10n:
  sourceCommit: 34c43aca36f776c824e698dfd07e3ece34cc6f00
---

{{MathMLRef}}

Das **`<msup>`** [MathML](/de/docs/Web/MathML) Element wird verwendet, um einem Ausdruck ein Superskript hinzuzufügen.

Es verwendet die folgende Syntax: `<msup> basis superscript </msup>`.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie das folgende veraltete Attribut:

- `superscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Ein {{cssxref("length-percentage")}}, das die Mindesthöhe angibt, um die Grundlinie des Superskripts nach oben zu verschieben.

> [!NOTE]
> Für das `superscriptshift` Attribut akzeptieren einige Browser möglicherweise auch [veraltete MathML-Längen](/de/docs/Web/MathML/Values#legacy_mathml_lengths).

## Beispiele

```html
<math display="block">
  <msup>
    <mi>X</mi>
    <mn>2</mn>
  </msup>
</math>
```

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ MathMLElement("msub") }} (Subskript)
- {{ MathMLElement("msubsup") }} (Subskript-Superskript-Paar)
- {{ MathMLElement("mmultiscripts") }} (Präskripte und Tensorindizes)
