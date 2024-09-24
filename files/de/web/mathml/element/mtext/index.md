---
title: <mtext>
slug: Web/MathML/Element/mtext
l10n:
  sourceCommit: 8eece0b998c23e8ea35f936d7371a169974130f5
---

{{MathMLRef}}

Das **`<mtext>`** [MathML](/de/docs/Web/MathML) Element wird verwendet, um beliebigen Text ohne notationalen Sinn darzustellen, wie Kommentare oder Anmerkungen.

Um Text mit notationalem Sinn darzustellen, verwenden Sie stattdessen {{ MathMLElement("mi") }}, {{ MathMLElement("mn") }}, {{ MathMLElement("mo") }} oder {{ MathMLElement("ms") }}.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
