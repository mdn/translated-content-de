---
title: <mover>
slug: Web/MathML/Reference/Element/mover
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Das **`<mover>`**-Element von [MathML](/de/docs/Web/MathML) wird verwendet, um einen Akzent oder eine Grenze über einem Ausdruck zu platzieren. Verwenden Sie die folgende Syntax: `<mover> base overscript </mover>`

## Attribute

Zu den Attributen dieses Elements gehören die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes) sowie das folgende Attribut:

- `accent`
  - : Ein [`<boolean>`](/de/docs/Web/MathML/Reference/Values#mathml-specific_types), der angibt, ob der obere Zusatz als Akzent behandelt werden soll (d.h. größer und näher am Basisausdruck dargestellt wird).

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

- {{ MathMLElement("munder") }} (unterer Zusatz)
- {{ MathMLElement("munderover") }} (Paar aus unterem und oberem Zusatz)
