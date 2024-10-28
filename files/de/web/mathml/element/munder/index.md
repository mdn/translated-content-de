---
title: <munder>
slug: Web/MathML/Element/munder
l10n:
  sourceCommit: a9a6b72518fa068991c95e8c1a5ba224533e53ee
---

{{MathMLRef}}

Das **`<munder>`** [MathML](/de/docs/Web/MathML)-Element wird verwendet, um einen Akzent oder ein Limit unter einem Ausdruck anzubringen. Es wird mit folgendem Syntax verwendet: `<munder> base underscript </munder>`

## Attribute

Dieses Element umfasst die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie folgendes Attribut:

- `accentunder`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Values#mathml-specific_types), der angibt, ob das Unterskript als Akzent behandelt werden soll (d.h. größer und näher am Basisausdruck gezeichnet).

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
      <a href="/de/docs/Web/Accessibility/ARIA/Roles">Implizite ARIA-Rolle</a>
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
