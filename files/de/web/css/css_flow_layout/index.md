---
title: CSS-Fluss-Layout
slug: Web/CSS/CSS_flow_layout
l10n:
  sourceCommit: 856b52f634b889084869d2ee0b8bb62c084be04d
---

{{CSSRef}}

_Normale Fluss_, oder Flusslayout, ist die Art und Weise, wie Block- und Inline-Elemente auf einer Seite angezeigt werden, bevor Änderungen an ihrem Layout vorgenommen werden. Der Fluss ist im Wesentlichen eine Reihe von Dingen, die alle zusammenarbeiten und in Ihrem Layout voneinander wissen. Sobald etwas _aus dem Fluss_ genommen wird, arbeitet es unabhängig.

Im normalen Fluss werden **Inline**-Elemente in der Inline-Richtung angezeigt, d. h. in der Richtung, in der Wörter in einem Satz gemäß dem [Schreibmodus](/de/docs/Web/CSS/CSS_writing_modes) des Dokuments angezeigt werden. **Block**-Elemente werden, wie Absätze im Schreibmodus dieses Dokuments, nacheinander angezeigt. Im Englischen werden Inline-Elemente daher nacheinander angezeigt, beginnend links, und Block-Elemente beginnen oben und bewegen sich die Seite hinunter.

## Einfaches Beispiel

Das folgende Beispiel zeigt Block- und Inline-Level-Boxen. Die beiden Absatzelemente mit einem grünen Rahmen sind Block-Level und werden untereinander angezeigt.

Der erste Satz enthält auch ein Span-Element mit einem blauen Hintergrund. Dieses ist auf Inline-Level und wird daher innerhalb des Satzes angezeigt.

{{EmbedGHLiveSample("css-examples/layout/normal-flow.html", '100%', 720)}}

## Anleitungen

- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)
- [Im Fluss und aus dem Fluss](/de/docs/Web/CSS/CSS_flow_layout/In_flow_and_out_of_flow)
- [Formatierungskontexte erklärt](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts)
- [Flusslayout und Schreibmodi](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes)
- [Flusslayout und Überlauf](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_overflow)

## Referenz

### Glossareinträge

- {{Glossary("Block/CSS", "Block (CSS)")}}
