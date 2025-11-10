---
title: <mtext>
slug: Web/MathML/Reference/Element/mtext
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

Das **`<mtext>`** [MathML](/de/docs/Web/MathML)-Element wird verwendet, um beliebigen Text ohne notationale Bedeutung darzustellen, wie Kommentare oder Anmerkungen.

Um Text mit notationaler Bedeutung darzustellen, verwenden Sie stattdessen {{ MathMLElement("mi") }}, {{ MathMLElement("mn") }}, {{ MathMLElement("mo") }} oder {{ MathMLElement("ms") }}.

## Attribute

Dieses Element akzeptiert die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes).

## Beispiele

```html
<math display="block">
  <mtext>Theorem of Pythagoras</mtext>
</math>

<math display="block">
  <mtext>/* comment here */</mtext>
</math>
```

{{ EmbedLiveSample('mtext_example', 700, 200, "", "") }}

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
