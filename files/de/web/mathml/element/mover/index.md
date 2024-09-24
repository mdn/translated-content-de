---
title: <mover>
slug: Web/MathML/Element/mover
l10n:
  sourceCommit: 07f0cf4375aaa02e1071d8bd0e8518db7609b7a9
---

{{MathMLRef}}

Das **`<mover>`** [MathML](/de/docs/Web/MathML)-Element wird verwendet, um einen Akzent oder eine Grenze über einem Ausdruck zu platzieren. Verwenden Sie die folgende Syntax: `<mover> base overscript </mover>`

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) und das folgende Attribut:

- `accent`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Values#mathml-specific_types), das angibt, ob das Oberskript als Akzent behandelt werden soll (d. h. größer und näher an dem Basisausdruck gezeichnet).

## Beispiele

```html
<math display="block">
  <mover accent="true">
    <mrow>
      <mi>x</mi>
      <mo>+</mo>
      <mi>y</mi>
      <mo>+</mo>
      <mi>z</mi>
    </mrow>
    <mo>&#x23DE;<!--TOP CURLY BRACKET--></mo>
  </mover>
</math>
```

{{ EmbedLiveSample('mover_example', 700, 200, "", "") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ MathMLElement("munder") }} (Unterskript)
- {{ MathMLElement("munderover") }} (Paar aus Unter- und Oberskript)
