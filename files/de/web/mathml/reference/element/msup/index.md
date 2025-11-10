---
title: <msup>
slug: Web/MathML/Reference/Element/msup
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

Das **`<msup>`** [MathML](/de/docs/Web/MathML)-Element wird verwendet, um einem Ausdruck einen Hochzeichen hinzuzufügen.

Es verwendet die folgende Syntax: `<msup> base superscript </msup>`.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes) sowie das folgende veraltete Attribut:

- `superscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Eine {{cssxref("length-percentage")}}, die die Mindestmenge angibt, um die Grundlinie des Hochzeichens nach oben zu verschieben.

> [!NOTE]
> Für das `superscriptshift`-Attribut akzeptieren einige Browser möglicherweise auch [veraltete MathML-Längen](/de/docs/Web/MathML/Reference/Values#legacy_mathml_lengths).

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

- {{ MathMLElement("msub") }} (Tiefgestellt)
- {{ MathMLElement("msubsup") }} (Kombination von Tief- und Hochgestellt)
- {{ MathMLElement("mmultiscripts") }} (Vorangestellte Indizes und Tensorindizes)
