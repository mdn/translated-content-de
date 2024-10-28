---
title: <mphantom>
slug: Web/MathML/Element/mphantom
l10n:
  sourceCommit: a9a6b72518fa068991c95e8c1a5ba224533e53ee
---

{{MathMLRef}}

Das **`<mphantom>`** [MathML](/de/docs/Web/MathML)-Element wird unsichtbar gerendert, aber die Dimensionen (wie Höhe, Breite und Basislinienposition) bleiben erhalten.

## Attribute

Dieses Element akzeptiert die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes).

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
      <a href="/de/docs/Web/Accessibility/ARIA/Roles">Implizierte ARIA-Rolle</a>
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
