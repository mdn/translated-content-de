---
title: <mphantom>
slug: Web/MathML/Reference/Element/mphantom
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

Das **`<mphantom>`** [MathML](/de/docs/Web/MathML) Element wird unsichtbar gerendert, aber seine Dimensionen (wie Höhe, Breite und Baseline-Position) bleiben erhalten.

## Attribute

Dieses Element akzeptiert die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes).

## Beispiele

```html
<math display="block">
  <mrow>
    <mi>x</mi>
    <mo>+</mo>
    <mphantom>
      <mi>y</mi>
      <mo>+</mo>
    </mphantom>
    <mi>z</mi>
  </mrow>
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

- {{ MathMLElement("mspace") }}
- {{ MathMLElement("mpadded") }}
