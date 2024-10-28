---
title: <msubsup>
slug: Web/MathML/Element/msubsup
l10n:
  sourceCommit: a9a6b72518fa068991c95e8c1a5ba224533e53ee
---

{{MathMLRef}}

Das **`<msubsup>`** [MathML](/de/docs/Web/MathML)-Element wird verwendet, um sowohl einen Tief- als auch einen Hochstapelskript gleichzeitig an einen Ausdruck anzuhängen.

Es verwendet die folgende Syntax: `<msubsup> base subscript superscript </msubsup>`.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie die folgenden veralteten Attribute:

- `subscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Eine {{cssxref("length-percentage")}}, die angibt, um wie viel das Grundlinie des Tiefstapelskripts nach unten verschoben wird.
- `superscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Eine {{cssxref("length-percentage")}}, die angibt, um wie viel das Grundlinie des Hochstapelskripts nach oben verschoben wird.

> [!NOTE]
> Für die Attribute `subscriptshift` und `superscriptshift` akzeptieren einige Browser möglicherweise auch [legacy MathML Längen](/de/docs/Web/MathML/Values#legacy_mathml_lengths).

## Beispiele

```html
<math display="block">
  <msubsup>
    <mo>&#x222B;<!--Integral --></mo>
    <mn>0</mn>
    <mn>1</mn>
  </msubsup>
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

- {{ MathMLElement("msub") }} (Tiefstapelskript)
- {{ MathMLElement("msup") }} (Hochstapelskript)
- {{ MathMLElement("mmultiscripts") }} (Präscripts und Tensor-Indizes)
