---
title: CSS Fluss-Layout
short-title: Flow layout
slug: Web/CSS/Guides/Display/Flow_layout
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

_Normaler Fluss_, oder Fluss-Layout, ist die Art und Weise, wie Block- und Inline-Elemente auf einer Seite angezeigt werden, bevor Änderungen an ihrem Layout vorgenommen werden. Der Fluss ist im Wesentlichen eine Reihe von Dingen, die alle zusammenarbeiten und über das Layout Bescheid wissen. Sobald etwas _aus dem Fluss_ genommen wird, arbeitet es unabhängig.

Im normalen Fluss werden **{{Glossary("Inline-level_content", "Inline")}}**-Elemente in der Inline-Richtung angezeigt, also in der Richtung, in der Wörter in einem Satz entsprechend dem [Schreibmodus](/de/docs/Web/CSS/Guides/Writing_modes) des Dokuments angezeigt werden. **{{Glossary("Block/CSS", "Block")}}** Elemente werden nacheinander angezeigt, so wie Absätze im Schreibmodus dieses Dokuments. Im Englischen werden daher Inline-Elemente nacheinander angezeigt, beginnend von links, und Block-Elemente beginnen oben und bewegen sich die Seite hinunter.

## Einfaches Beispiel

Das folgende Beispiel zeigt Block- und Inline-Level-Boxen. Die beiden Absatz-Elemente mit einem grünen Rahmen sind Block-Level und werden untereinander angezeigt.

Der erste Satz enthält auch ein Span-Element mit einem blauen Hintergrund. Dies ist Inline-Level und wird daher an Ort und Stelle im Satz angezeigt.

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

- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/Guides/Display/Block_and_inline_layout)
- [Im Fluss und außerhalb des Flusses](/de/docs/Web/CSS/Guides/Display/In_flow_and_out_of_flow)
- [Formatierungs-Kontexte erklärt](/de/docs/Web/CSS/Guides/Display/Formatting_contexts)
- [Fluss-Layout und Schreibmodi](/de/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes)
- [Fluss-Layout und Überlauf](/de/docs/Web/CSS/Guides/Display/Flow_layout_and_overflow)
