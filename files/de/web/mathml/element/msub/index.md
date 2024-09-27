---
title: <msub>
slug: Web/MathML/Element/msub
l10n:
  sourceCommit: 34c43aca36f776c824e698dfd07e3ece34cc6f00
---

{{MathMLRef}}

Das **`<msub>`** [MathML](/de/docs/Web/MathML)-Element wird verwendet, um einem Ausdruck einen Tiefstellungsindex hinzuzufügen.

Es verwendet die folgende Syntax: `<msub> Basis Tiefstellung </msub>`.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie das folgende veraltete Attribut:

- `subscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Ein {{cssxref("length-percentage")}}, das die minimale Verschiebung der Grundlinie der Tiefstellung nach unten angibt.

> [!NOTE]
> Für das Attribut `subscriptshift` können einige Browser auch [veraltete MathML-Längen](/de/docs/Web/MathML/Values#legacy_mathml_lengths) akzeptieren.

## Beispiele

```html
<math display="block">
  <msub>
    <mi>X</mi>
    <mn>1</mn>
  </msub>
</math>
```

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ MathMLElement("msup") }} (Hochstellung)
- {{ MathMLElement("msubsup") }} (Tief-Hochstellungspaar)
- {{ MathMLElement("mmultiscripts") }} (Präscripts und Tensorindizes)
