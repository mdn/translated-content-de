---
title: <munderover>
slug: Web/MathML/Element/munderover
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{MathMLRef}}

Das **`<munderover>`** [MathML](/de/docs/Web/MathML) Element wird verwendet, um Akzente oder Grenzen sowohl unter als auch über einem Ausdruck anzubringen.

Es verwendet die folgende Syntax: `<munderover> base underscript overscript </munderover>`

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie die folgenden Attribute:

- `accent`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Values#mathml-specific_types) Wert, der angibt, ob das obere Skript als Akzent behandelt werden soll (d.h. größer und näher an dem Basisausdruck gezeichnet werden soll).
- `accentunder`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Values#mathml-specific_types) Wert, der angibt, ob das untere Skript als Akzent behandelt werden soll (d.h. größer und näher an dem Basisausdruck gezeichnet werden soll).

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
- {{ MathMLElement("mover") }} (Oberskript)
