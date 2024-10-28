---
title: <msub>
slug: Web/MathML/Element/msub
l10n:
  sourceCommit: a9a6b72518fa068991c95e8c1a5ba224533e53ee
---

{{MathMLRef}}

Das **`<msub>`** [MathML](/de/docs/Web/MathML) Element wird verwendet, um einen Index an einen Ausdruck anzuhängen.

Es verwendet die folgende Syntax: `<msub> base subscript </msub>`.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie das folgende veraltete Attribut:

- `subscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Eine {{cssxref("length-percentage")}}, die die minimale Verschiebung der Grundlinie des Index nach unten angibt.

> [!NOTE]
> Für das `subscriptshift` Attribut akzeptieren einige Browser möglicherweise auch [veraltete MathML-Längen](/de/docs/Web/MathML/Values#legacy_mathml_lengths).

## Beispiele

```html
<math display="block">
  <msub>
    <mi>X</mi>
    <mn>1</mn>
  </msub>
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

- {{ MathMLElement("msup") }} (Hochgestellt)
- {{ MathMLElement("msubsup") }} (Index-Hochstellen-Paar)
- {{ MathMLElement("mmultiscripts") }} (Päscripts und Tensorindizes)
