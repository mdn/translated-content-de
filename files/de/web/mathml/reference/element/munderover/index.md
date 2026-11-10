---
title: <munderover>
slug: Web/MathML/Reference/Element/munderover
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Das [MathML](/de/docs/Web/MathML)-Element **`<munderover>`** wird verwendet, um Akzente oder Grenzen sowohl unter als auch über einem Ausdruck anzubringen.

Es verwendet die folgende Syntax: `<munderover> base underscript overscript </munderover>`

## Attribute

Zu den Attributen dieses Elements gehören die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes) sowie die folgenden Attribute:

- `accent`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), der angibt, ob das oberhalb stehende Skript als Akzent behandelt werden soll (d.h. größer und näher am Basisausdruck dargestellt wird).
- `accentunder`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), der angibt, ob das unterhalb stehende Skript als Akzent behandelt werden soll (d.h. größer und näher am Basisausdruck dargestellt wird).

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

{{ EmbedLiveSample('examples', 700, 200, "", "") }}

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

- {{ MathMLElement("munder") }} (Untergesetzter Ausdruck)
- {{ MathMLElement("mover") }} (Übergesetzter Ausdruck)
