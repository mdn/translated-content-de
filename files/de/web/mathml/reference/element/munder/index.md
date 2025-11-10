---
title: <munder>
slug: Web/MathML/Reference/Element/munder
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Das **`<munder>`** [MathML](/de/docs/Web/MathML)-Element wird verwendet, um einen Akzent oder eine Begrenzung unter einem Ausdruck anzubringen. Es verwendet die folgende Syntax: `<munder> base underscript </munder>`

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes) sowie das folgende Attribut:

- `accentunder`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), das angibt, ob das Unterskript als Akzent behandelt werden soll (d.h. größer und näher am Basisausdruck gezeichnet werden soll).

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

## Siehe auch

- {{ MathMLElement("mover") }} (Overscript)
- {{ MathMLElement("munderover") }} (Unterskript-Overscript-Paar)
