---
title: <msub>
slug: Web/MathML/Element/msub
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{MathMLRef}}

Das **`<msub>`** [MathML](/de/docs/Web/MathML)-Element wird verwendet, um einem Ausdruck einen Tiefstellungsindex hinzuzufügen.

Es verwendet die folgende Syntax: `<msub> base subscript </msub>`.

## Attribute

Dieses Element umfasst die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie das folgende veraltete Attribut:

- `subscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Ein {{cssxref("length-percentage")}}, das angibt, um wie viel minimal die Basislinie des Tiefstellungsindex nach unten verschoben werden soll.

> [!NOTE]
> Für das `subscriptshift`-Attribut können einige Browser auch [ältere MathML-Längen](/de/docs/Web/MathML/Values#legacy_mathml_lengths) akzeptieren.

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

- {{ MathMLElement("msup") }} (Hochstellung)
- {{ MathMLElement("msubsup") }} (Tief- und Hochstellungs-Paar)
- {{ MathMLElement("mmultiscripts") }} (Präskripte und Tensorindizes)
