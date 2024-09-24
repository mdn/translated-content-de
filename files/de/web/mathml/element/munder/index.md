---
title: <munder>
slug: Web/MathML/Element/munder
l10n:
  sourceCommit: 07f0cf4375aaa02e1071d8bd0e8518db7609b7a9
---

{{MathMLRef}}

Das **`<munder>`** [MathML](/de/docs/Web/MathML) Element wird verwendet, um einen Akzent oder ein Limit unter einem Ausdruck anzubringen. Es verwendet die folgende Syntax: `<munder> base underscript </munder>`

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie das folgende Attribut:

- `accentunder`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Values#mathml-specific_types), das angibt, ob das Unterskript als Akzent behandelt werden sollte (d. h., größer und näher an den Basis-Ausdruck gezeichnet).

## Beispiele

```html
<math display="block">
  <munder accentunder="true">
    <mrow>
      <mi>x</mi>
      <mo>+</mo>
      <mi>y</mi>
      <mo>+</mo>
      <mi>z</mi>
    </mrow>
    <mo>&#x23DF;<!--BOTTOM CURLY BRACKET--></mo>
  </munder>
</math>
```

{{ EmbedLiveSample('munder_example', 700, 200, "", "") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ MathMLElement("mover") }} (Überschrift)
- {{ MathMLElement("munderover") }} (Unterskript-Überskript-Paar)
