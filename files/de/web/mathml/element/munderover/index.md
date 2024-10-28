---
title: <munderover>
slug: Web/MathML/Element/munderover
l10n:
  sourceCommit: a9a6b72518fa068991c95e8c1a5ba224533e53ee
---

{{MathMLRef}}

Das **`<munderover>`** [MathML](/de/docs/Web/MathML) Element wird verwendet, um Akzente oder Grenzen sowohl unter als auch über einem Ausdruck anzubringen.

Es verwendet die folgende Syntax: `<munderover> base underscript overscript </munderover>`

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie die folgenden Attribute:

- `accent`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Values#mathml-specific_types), der angibt, ob das oberskript als Akzent behandelt werden soll (d.h. größer und näher an den Basis-Ausdruck gezeichnet).
- `accentunder`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Values#mathml-specific_types), der angibt, ob das unterscript als Akzent behandelt werden soll (d.h. größer und näher an den Basis-Ausdruck gezeichnet).

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

## Technische Übersicht

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

- {{ MathMLElement("munder") }} (Unterscript)
- {{ MathMLElement("mover") }} (Oberscript)
