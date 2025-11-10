---
title: <mn>
slug: Web/MathML/Reference/Element/mn
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

Das **`<mn>`** [MathML](/de/docs/Web/MathML)-Element repräsentiert ein **numerisches** Literal, das normalerweise eine Folge von Ziffern mit einem möglichen Separator (Punkt oder Komma) ist. Es ist jedoch auch erlaubt, beliebigen Text zu enthalten, der tatsächlich eine numerische Größe ist, beispielsweise "elf".

## Attribute

Dieses Element akzeptiert die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes).

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
