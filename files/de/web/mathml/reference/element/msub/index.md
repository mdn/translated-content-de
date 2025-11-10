---
title: <msub>
slug: Web/MathML/Reference/Element/msub
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

Das **`<msub>`** [MathML](/de/docs/Web/MathML)-Element wird verwendet, um einem Ausdruck einen tiefgestellten Index hinzuzufügen.

Es verwendet die folgende Syntax: `<msub> base subscript </msub>`.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes) sowie das folgende veraltete Attribut:

- `subscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Ein {{cssxref("length-percentage")}}, das die minimale Verschiebung der Basislinie des tiefgestellten Index nach unten angibt.

> [!NOTE]
> Für das Attribut `subscriptshift` akzeptieren einige Browser möglicherweise auch [veraltete MathML-Längen](/de/docs/Web/MathML/Reference/Values#legacy_mathml_lengths).

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

- {{ MathMLElement("msup") }} (Hochgestellt)
- {{ MathMLElement("msubsup") }} (Tiefgestellt-hochgestellt Paar)
- {{ MathMLElement("mmultiscripts") }} (Vorangestellte Indizes und Tensorindizes)
