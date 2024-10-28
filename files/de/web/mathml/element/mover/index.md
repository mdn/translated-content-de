---
title: <mover>
slug: Web/MathML/Element/mover
l10n:
  sourceCommit: a9a6b72518fa068991c95e8c1a5ba224533e53ee
---

{{MathMLRef}}

Das **`<mover>`** [MathML](/de/docs/Web/MathML)-Element wird verwendet, um einen Akzent oder eine Grenze über einem Ausdruck zu platzieren. Verwenden Sie die folgende Syntax: `<mover> base overscript </mover>`

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie folgendes Attribut:

- `accent`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Values#mathml-specific_types), das angibt, ob das Overscript als Akzent behandelt werden soll (d.h. größer und näher zum Basisausdruck gezeichnet).

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

- {{ MathMLElement("munder") }} (Unterscript)
- {{ MathMLElement("munderover") }} (Paar aus Unterscript und Overscript)
