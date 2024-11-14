---
title: CSS-Flow-Layout
slug: Web/CSS/CSS_flow_layout
l10n:
  sourceCommit: 5755d6dfbac15abc29ddcd924cee110c4139b073
---

{{CSSRef}}

Der _normale Fluss_, oder Flow-Layout, ist die Art und Weise, wie Block- und Inline-Elemente auf einer Seite angezeigt werden, bevor Änderungen an ihrem Layout vorgenommen werden. Der Fluss ist im Wesentlichen eine Reihe von Dingen, die alle zusammenarbeiten und in Ihrem Layout voneinander wissen. Sobald etwas _aus dem Fluss_ genommen wird, arbeitet es unabhängig.

Im normalen Fluss werden **Inline**-Elemente in der Inlinerichtung angezeigt, das heißt, in der Richtung, in der Wörter in einem Satz gemäß dem [Schreibmodus](/de/docs/Web/CSS/CSS_writing_modes) des Dokuments dargestellt werden. **Block**-Elemente werden nacheinander angezeigt, wie es Absätze im Schreibmodus dieses Dokuments tun. Im Englischen werden Inline-Elemente daher nacheinander beginnend von links angezeigt, und Block-Elemente beginnen oben und bewegen sich die Seite hinunter.

## Einfaches Beispiel

Das folgende Beispiel demonstriert Block- und Inline-Level-Boxen. Die beiden Absatz-Elemente mit einem grünen Rahmen sind auf Block-Level und werden untereinander angezeigt.

Der erste Satz enthält auch ein `span`-Element mit blauem Hintergrund. Dies ist Inline-Level und wird daher an Ort und Stelle im Satz angezeigt.

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

## Leitfäden

- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)
- [Im Fluss und aus dem Fluss](/de/docs/Web/CSS/CSS_flow_layout/In_flow_and_out_of_flow)
- [Erklärung der Formatierungskontexte](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts)
- [Flow-Layout und Schreibmodi](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes)
- [Flow-Layout und Überlauf](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_overflow)

## Referenz

### Glossareinträge

- {{Glossary("Block/CSS", "Block (CSS)")}}
