---
title: <msup>
slug: Web/MathML/Element/msup
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{MathMLRef}}

Das **`<msup>`** [MathML](/de/docs/Web/MathML) Element wird verwendet, um einem Ausdruck einen Hochgestellt-Zeichen zuzuordnen.

Es verwendet die folgende Syntax: `<msup> Grundlinie Hochzeichen </msup>`.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie das folgende veraltete Attribut:

- `superscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Ein {{cssxref("length-percentage")}}, das angibt, um wie viel die Grundlinie des Hochzeichens mindestens nach oben verschoben werden soll.

> [!NOTE]
> Für das Attribut `superscriptshift` akzeptieren einige Browser möglicherweise auch [veraltete MathML-Längen](/de/docs/Web/MathML/Values#legacy_mathml_lengths).

## Beispiele

```html
<math display="block">
  <msup>
    <mi>X</mi>
    <mn>2</mn>
  </msup>
</math>
```

{{EmbedLiveSample('Examples')}}

## Technische Zusammenfassung

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles">Implizierte ARIA-Rolle</a>
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

- {{ MathMLElement("msub") }} (Tiefgestellt)
- {{ MathMLElement("msubsup") }} (Tiefgestellt-Hochgestellt-Paar)
- {{ MathMLElement("mmultiscripts") }} (Präskripte und Tensorindizes)
