---
title: CSS Fluss-Layout
short-title: Flow layout
slug: Web/CSS/CSS_display/Flow_layout
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

_Normal Flow_, oder Fluss-Layout, ist die Art und Weise, wie Block- und Inline-Elemente auf einer Seite angezeigt werden, bevor Änderungen an ihrem Layout vorgenommen werden. Der Fluss ist im Wesentlichen eine Gruppe von Dingen, die alle zusammenarbeiten und im Layout voneinander wissen. Sobald etwas _aus dem Fluss_ genommen wird, funktioniert es unabhängig.

Im normalen Fluss werden **{{Glossary("Inline-level_content", "Inline")}}**-Elemente in der Inline-Richtung angezeigt, das heißt, in der Richtung, in der Wörter in einem Satz gemäß dem [Schreibmodus](/de/docs/Web/CSS/CSS_writing_modes) des Dokuments angezeigt werden. **{{Glossary("Block/CSS", "Block")}}**-Elemente werden nacheinander angezeigt, so wie Absätze im Schreibmodus dieses Dokuments. Im Englischen werden Inline-Elemente daher nacheinander angezeigt, beginnend von links, und Block-Elemente beginnen oben und bewegen sich die Seite hinunter.

## Einfaches Beispiel

Das folgende Beispiel zeigt Block- und Inline-Level-Boxen. Die beiden Absatz-Elemente mit einem grünen Rahmen sind Block-Level und werden übereinander angezeigt.

Der erste Satz enthält auch ein Span-Element mit einem blauen Hintergrund. Dies ist Inline-Level und wird daher innerhalb des Satzes angezeigt.

```html hidden live-sample___normal-flow
<div class="box">
  <p>
    One <span>November</span> night in the year 1782, so the story runs, two
    brothers sat over their winter fire in the little French town of Annonay,
    watching the grey smoke-wreaths from the hearth curl up the wide chimney.
    Their names were Stephen and Joseph Montgolfier, they were papermakers by
    trade, and were noted as possessing thoughtful minds and a deep interest in
    all scientific knowledge and new discovery.
  </p>
  <p>
    Before that night—a memorable night, as it was to prove—hundreds of millions
    of people had watched the rising smoke-wreaths of their fires without
    drawing any special inspiration from the fact.
  </p>
</div>
```

```css hidden live-sample___normal-flow
body {
  font: 1.2em sans-serif;
}

p {
  border: 2px solid green;
}
span {
  background-color: lightblue;
}
```

{{EmbedLiveSample("normal-flow", "", "250px")}}

## Siehe auch

- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow)
- [Im Fluss und aus dem Fluss](/de/docs/Web/CSS/CSS_display/In_flow_and_out_of_flow)
- [Formatierungskontexte erklärt](/de/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts)
- [Fluss-Layout und Schreibmodi](/de/docs/Web/CSS/CSS_display/Flow_layout_and_writing_modes)
- [Fluss-Layout und Überlauf](/de/docs/Web/CSS/CSS_display/Flow_layout_and_overflow)
