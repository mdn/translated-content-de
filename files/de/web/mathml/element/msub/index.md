---
title: <msub>
slug: Web/MathML/Element/msub
l10n:
  sourceCommit: 34c43aca36f776c824e698dfd07e3ece34cc6f00
---

{{MathMLRef}}

Das **`<msub>`** [MathML](/de/docs/Web/MathML)-Element wird verwendet, um ein Tiefzeichen an einen Ausdruck anzuhängen.

Es verwendet die folgende Syntax: `<msub> base subscript </msub>`.

## Attribute

Zu den Attributen dieses Elements gehören die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie das folgende veraltete Attribut:

- `subscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Eine {{cssxref("length-percentage")}}, die die Mindestverschiebung der Grundlinie des Tiefzeichens nach unten angibt.

> [!NOTE]
> Für das `subscriptshift`-Attribut akzeptieren einige Browser möglicherweise auch [veraltete MathML-Längen](/de/docs/Web/MathML/Values#legacy_mathml_lengths).

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

- {{ MathMLElement("msup") }} (Hochzeichen)
- {{ MathMLElement("msubsup") }} (Tief-Hochzeichen-Paar)
- {{ MathMLElement("mmultiscripts") }} (Präskripte und Tensor-Indizes)
