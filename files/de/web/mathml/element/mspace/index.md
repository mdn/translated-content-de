---
title: <mspace>
slug: Web/MathML/Element/mspace
l10n:
  sourceCommit: 34c43aca36f776c824e698dfd07e3ece34cc6f00
---

{{MathMLRef}}

Das **`<mspace>`** [MathML](/de/docs/Web/MathML) Element wird verwendet, um einen leeren Raum darzustellen, dessen Größe durch seine Attribute festgelegt wird.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie die folgenden Attribute:

- `depth`
  - : Ein {{cssxref("length-percentage")}}, das die gewünschte Tiefe (unterhalb der Grundlinie) des Raums angibt.
- `height`
  - : Ein {{cssxref("length-percentage")}}, das die gewünschte Höhe (oberhalb der Grundlinie) des Raums angibt.
- `width`
  - : Ein {{cssxref("length-percentage")}}, das die gewünschte Breite des Raums angibt.

> [!NOTE]
> Für die Attribute `depth`, `height`, `width` akzeptieren einige Browser möglicherweise auch [veraltete MathML-Längen](/de/docs/Web/MathML/Values#legacy_mathml_lengths).

## Beispiele

```html
<math display="block">
  <mn>1</mn>
  <mspace
    depth="40px"
    height="20px"
    width="100px"
    style="background: lightblue" />
  <mn>2</mn>
</math>
```

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ MathMLElement("mpadded") }}
- {{ MathMLElement("mphantom") }}
