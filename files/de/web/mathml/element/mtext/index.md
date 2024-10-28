---
title: <mtext>
slug: Web/MathML/Element/mtext
l10n:
  sourceCommit: a9a6b72518fa068991c95e8c1a5ba224533e53ee
---

{{MathMLRef}}

Das **`<mtext>`** [MathML](/de/docs/Web/MathML)-Element wird verwendet, um beliebigen Text ohne notationale Bedeutung darzustellen, wie z.B. Kommentare oder Anmerkungen.

Um Text mit notationaler Bedeutung anzuzeigen, verwenden Sie stattdessen {{ MathMLElement("mi") }}, {{ MathMLElement("mn") }}, {{ MathMLElement("mo") }} oder {{ MathMLElement("ms") }}.

## Attribute

Dieses Element akzeptiert die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes).

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
