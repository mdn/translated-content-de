---
title: <mtext>
slug: Web/MathML/Reference/Element/mtext
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Das **`<mtext>`**-Element von [MathML](/de/docs/Web/MathML) wird verwendet, um beliebigen Text _ohne_ mathematische Bedeutung darzustellen, beispielsweise Kommentare oder Anmerkungen.

Um Text _mit_ mathematischer Bedeutung darzustellen, verwenden Sie stattdessen {{ MathMLElement("mi") }}, {{ MathMLElement("mn") }}, {{ MathMLElement("mo") }} oder {{ MathMLElement("ms") }}.

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

{{ EmbedLiveSample('examples', 700, 200, "", "") }}

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
