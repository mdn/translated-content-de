---
title: <mn>
slug: Web/MathML/Element/mn
l10n:
  sourceCommit: a9a6b72518fa068991c95e8c1a5ba224533e53ee
---

{{MathMLRef}}

Das **`<mn>`** [MathML](/de/docs/Web/MathML)-Element repräsentiert ein **numerisches** Literal, das normalerweise eine Sequenz von Ziffern mit einem möglichen Trennzeichen (einem Punkt oder einem Komma) ist. Es ist jedoch auch erlaubt, beliebigen Text darin zu haben, der tatsächlich eine numerische Größe darstellt, zum Beispiel "elf".

## Attribute

Dieses Element akzeptiert die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes).

## Beispiele

```html
<math display="block">
  <mn>0</mn>
</math>

<math display="block">
  <mn>1.337</mn>
</math>

<math display="block">
  <mn>twelve</mn>
</math>

<math display="block">
  <mn>XVI</mn>
</math>

<math display="block">
  <mn>2e10</mn>
</math>
```

{{ EmbedLiveSample('mi_example', 700, 200, "", "") }}

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
