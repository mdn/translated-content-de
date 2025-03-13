---
title: <munder>
slug: Web/MathML/Reference/Element/munder
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

Das **`<munder>`** [MathML](/de/docs/Web/MathML) Element wird verwendet, um einen Akzent oder ein Limit unter einem Ausdruck anzubringen. Es verwendet die folgende Syntax: `<munder> base underscript </munder>`

## Attribute

Zu den Attributen dieses Elements gehören die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes) sowie das folgende Attribut:

- `accentunder`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), das angibt, ob das Unter-Skript als Akzent behandelt werden soll (d. h. größer und näher an dem Basisausdruck gezeichnet).

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
- {{ MathMLElement("munderover") }} (Paar aus Unterskript und Oberskript)
