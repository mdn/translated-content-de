---
title: <msup>
slug: Web/MathML/Element/msup
l10n:
  sourceCommit: a9a6b72518fa068991c95e8c1a5ba224533e53ee
---

{{MathMLRef}}

Das **`<msup>`** [MathML](/de/docs/Web/MathML)-Element wird verwendet, um einem Ausdruck einen hochgestellten Index anzufügen.

Es verwendet die folgende Syntax: `<msup> base superscript </msup>`.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie das folgende veraltete Attribut:

- `superscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Ein {{cssxref("length-percentage")}}, das die minimale Menge angibt, um die Basislinie des Hochgestellten nach oben zu verschieben.

> [!NOTE]
> Für das `superscriptshift`-Attribut können einige Browser auch [veraltete MathML-Längen](/de/docs/Web/MathML/Values#legacy_mathml_lengths) akzeptieren.

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

- {{ MathMLElement("msub") }} (Tiefgestellt)
- {{ MathMLElement("msubsup") }} (Paar aus tief- und hochgestellt)
- {{ MathMLElement("mmultiscripts") }} (Vorschriften und Tensorindizes)
