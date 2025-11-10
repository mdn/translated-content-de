---
title: <msubsup>
slug: Web/MathML/Reference/Element/msubsup
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

Das **`<msubsup>`** [MathML](/de/docs/Web/MathML)-Element wird verwendet, um sowohl ein Subskript als auch ein Superskript gemeinsam an einen Ausdruck anzuhängen.

Es verwendet die folgende Syntax: `<msubsup> base subscript superscript </msubsup>`.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes) sowie die folgenden veralteten Attribute:

- `subscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Ein {{cssxref("length-percentage")}}, das angibt, um wie viel die Grundlinie des Subskripts nach unten verschoben werden soll.
- `superscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Ein {{cssxref("length-percentage")}}, das angibt, um wie viel die Grundlinie des Superskripts nach oben verschoben werden soll.

> [!NOTE]
> Für die Attribute `subscriptshift` und `superscriptshift` können einige Browser auch [legacylänge MathML-Längen](/de/docs/Web/MathML/Reference/Values#legacy_mathml_lengths) akzeptieren.

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

- {{ MathMLElement("msub") }} (Subskript)
- {{ MathMLElement("msup") }} (Superskript)
- {{ MathMLElement("mmultiscripts") }} (Präskripte und Tensor-Indizes)
