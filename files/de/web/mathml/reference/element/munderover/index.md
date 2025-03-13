---
title: <munderover>
slug: Web/MathML/Reference/Element/munderover
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

Das **`<munderover>`** [MathML](/de/docs/Web/MathML) Element wird verwendet, um sowohl Akzente als auch Grenzen über und unter einem Ausdruck zu platzieren.

Es verwendet die folgende Syntax: `<munderover> base underscript overscript </munderover>`

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes) sowie die folgenden Attribute:

- `accent`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), das angibt, ob das obere Skript als Akzent behandelt werden soll (d.h. größer und näher am Basisausdruck gezeichnet werden soll).
- `accentunder`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), das angibt, ob das untere Skript als Akzent behandelt werden soll (d.h. größer und näher am Basisausdruck gezeichnet werden soll).

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

- {{ MathMLElement("munder") }} (Unterskript)
- {{ MathMLElement("mover") }} (Überskript)
