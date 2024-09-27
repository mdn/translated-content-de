---
title: CSS Flow Layout
slug: Web/CSS/CSS_flow_layout
l10n:
  sourceCommit: 856b52f634b889084869d2ee0b8bb62c084be04d
---

{{CSSRef}}

_Der normale Fluss_ oder _Flow Layout_ beschreibt, wie Block- und Inline-Elemente auf einer Seite angezeigt werden, bevor deren Layout verändert wird. Der Fluss ist im Wesentlichen eine Sammlung von Dingen, die alle zusammenarbeiten und in Ihrem Layout voneinander wissen. Sobald etwas _aus dem Fluss_ genommen wird, arbeitet es unabhängig.

Im normalen Fluss zeigen **Inline-Elemente** in der Inline-Richtung an, das heißt in der Richtung, in der Wörter in einem Satz gemäß dem [Writing Mode](/de/docs/Web/CSS/CSS_writing_modes) des Dokuments angezeigt werden. **Block-Elemente** werden nacheinander angezeigt, so wie es Absätze im Writing Mode dieses Dokuments tun. Im Englischen werden Inline-Elemente daher nacheinander angezeigt, beginnend auf der linken Seite, und Block-Elemente beginnen oben und bewegen sich die Seite hinunter.

## Grundlegendes Beispiel

Das folgende Beispiel demonstriert Block- und Inline-Level-Boxen. Die zwei Absatzelemente mit einem grünen Rahmen sind Block-Level-Elemente, die untereinander angezeigt werden.

Der erste Satz enthält auch ein `span`-Element mit einem blauen Hintergrund. Dies ist ein Inline-Level-Element und wird daher an Ort und Stelle im Satz angezeigt.

{{EmbedGHLiveSample("css-examples/layout/normal-flow.html", '100%', 720)}}

## Leitfaden

- [Block und Inline Layout im normalen Fluss](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)
- [Im Fluss und aus dem Fluss](/de/docs/Web/CSS/CSS_flow_layout/In_flow_and_out_of_flow)
- [Formatierungskontexte erklärt](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts)
- [Flow Layout und Writing Modes](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes)
- [Flow Layout und Overflow](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_overflow)

## Referenz

### Glossareinträge

- [Block (CSS)](/de/docs/Glossary/Block/CSS)
