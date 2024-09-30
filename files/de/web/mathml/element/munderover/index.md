---
title: <munderover>
slug: Web/MathML/Element/munderover
l10n:
  sourceCommit: 07f0cf4375aaa02e1071d8bd0e8518db7609b7a9
---

{{MathMLRef}}

Das **`<munderover>`** [MathML](/de/docs/Web/MathML)-Element wird verwendet, um Akzente oder Grenzen sowohl unter als auch über einem Ausdruck anzubringen.

Es verwendet die folgende Syntax: `<munderover> base underscript overscript </munderover>`

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie die folgenden Attribute:

- `accent`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Values#mathml-specific_types), das angibt, ob das Überskript als Akzent behandelt werden soll (d. h. größer und näher am Basisausdruck gezeichnet werden soll).
- `accentunder`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Values#mathml-specific_types), das angibt, ob das Unterskript als Akzent behandelt werden soll (d. h. größer und näher am Basisausdruck gezeichnet werden soll).

## Beispiele

```html
<math display="block">
  <munderover>
    <mo>∑</mo>
    <mrow>
      <mi>n</mi>
      <mo>=</mo>
      <mn>1</mn>
    </mrow>
    <mrow>
      <mo>+</mo>
      <mn>∞</mn>
    </mrow>
  </munderover>
</math>
```

{{ EmbedLiveSample('munderover_example', 700, 200, "", "") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ MathMLElement("munder") }} (Unterskript)
- {{ MathMLElement("mover") }} (Überskript)
